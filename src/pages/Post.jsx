import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import PostTitle from "../components/post/PostTitle";
import styled from "styled-components";
import PostContent from "../components/post/PostContent";
import { useEffect, useState } from "react";
import Profile from "../components/post/Profile";
import CommentList from "../components/post/CommentList";
import { db } from "../firebase";
import { doc, getDoc, Timestamp } from "firebase/firestore";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    name: "",
    createdAt: "",
    img: "",
    content: "",
  });

  useEffect(() => {
    console.log("postId:", postId);
    const fetchPost = async () => {
      if (!postId) {
        console.error("No create provided!");
        return;
      }

      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <>
      <Header />
      <PostPage>
        <PostTitle title={post.title} name={post.name} date={post.createdAt} />
        <PostContent img={post.img} content={post.content} />
        <Profile />
        <CommentList postId={postId} />
      </PostPage>
    </>
  );
}
const PostPage = styled.div`
  width: 750px;
  margin: 0 auto;
  margin-top: 50px;
`;
export default Post;
