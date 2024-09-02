import { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "./Box";
import { db } from "../../firebase"; // Firestore 초기화 파일 가져오기
import { collection, getDocs } from "firebase/firestore";
import img2 from "../../img/img2.jpg";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), // 문서의 데이터 및 id를 합침
        }));
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <PostBoxList>
      {posts.map((post) => (
        <Box
          id={post.id}
          title={post.title}
          content={post.content}
          img={img2}
          date={post.createdAt}
        />
      ))}
    </PostBoxList>
  );
}

const PostBoxList = styled.div`
  margin: 20px;
  margin-top: 30px;
  flex: 1;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

export default PostList;
