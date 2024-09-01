import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useState } from "react";

function CommentList() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleClickCommentButton = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <CommentPart>
      <div>{comments.length}개의 댓글</div>
      <WriteComment
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        placeholder="댓글을 작성하세요"
      ></WriteComment>
      <Button onClick={handleClickCommentButton}>댓글 작성</Button>
      {comments.map((comment, index) => (
        <CommentItem comment={comment} key={index} />
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
