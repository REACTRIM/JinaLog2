import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase"; // Firestore를 초기화한 Firebase 파일에서 가져오기
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

function CommentList({ onSave, postId }) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [newCommentAdded, setNewCommentAdded] = useState(false); // 새 댓글 작성 여부를 추적하는 상태
  const commentRef = useRef(null);

  const fetchCommentList = async () => {
    try {
      const commentsRef = collection(db, `posts/${postId}/comments`);

      // createdAt 필드를 기준으로 오름차순 정렬
      const q = query(commentsRef, orderBy("createdAt", "asc"));

      const querySnapshot = await getDocs(q);
      const commentData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCommentList(commentData);
      setNewCommentAdded(false);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };
  useEffect(() => {
    fetchCommentList();
  }, [postId]);

  useEffect(() => {
    if (commentList.length > 0 && commentRef.current) {
      commentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [newCommentAdded]);

  const handleSave = async () => {
    try {
      const commentRef = await addDoc(
        collection(db, `posts/${postId}/comments`),
        {
          content: comment,
          author: "Jina",
          createdAt: new Date().getTime(),
        }
      );
      console.log("Comment written with ID: ", commentRef.id);
      alert("Comment saved successfully!");
      if (onSave) {
        onSave(commentRef.id); // 저장된 문서의 ID를 부모 컴포넌트로 전달
      }
    } catch (e) {
      console.error("Error adding comment: ", e);
    }
    setComment("");
    setNewCommentAdded(true);
    fetchCommentList();
  };

  return (
    <CommentPart>
      <div>{commentList?.length}개의 댓글</div>
      <WriteComment
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        placeholder="댓글을 작성하세요"
      ></WriteComment>
      <Button onClick={handleSave}>댓글 작성</Button>
      {commentList?.map((comment, index) => (
        <CommentItem
          content={comment.content}
          key={comment.id}
          author={comment.author}
          createdAt={comment.createdAt}
          ref={index === commentList.length - 1 ? commentRef : null}
        />
      ))}
    </CommentPart>
  );
}

const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
  font-weight: 700;
  width: 120px;
  height: 35px;
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 16px;
  cursor: pointer;
  margin-left: auto;
`;
const WriteComment = styled.textarea`
  border-radius: 5px;
  border: 1px solid lightgrey;
  margin-top: 20px;
  padding: 20px 15px;
  width: 100%;
  align-self: center;
  height: 100px;
  font-size: 15px;
  color: grey;
  padding-right: 5px;
  resize: none;
  box-sizing: border-box;
`;
const CommentPart = styled.div`
  margin-top: 50px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;
export default CommentList;
