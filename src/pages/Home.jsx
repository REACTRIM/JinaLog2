//import { useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import List from "../components/home/List";
import PostList from "../components/home/PostList";

function Home() {
  return (
    <HomePage>
      <Header />
      <List />
      <PostList />
    </HomePage>
  );
}

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default Home;
