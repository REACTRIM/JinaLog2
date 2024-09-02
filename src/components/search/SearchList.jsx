import React from "react";
import styled from "styled-components";
import myprofile from "../../img/myprofile.jpg";

function SearchList({ posts }) {
  return (
    <PostList>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostItem key={post.id}>
            <ProfilePart>
              <ProfileImg src={myprofile} alt="profile img" />
              <Name>Jina</Name>
            </ProfilePart>
            <PostSection>
              <Title>{post.title}</Title>
              <Content
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></Content>
            </PostSection>
          </PostItem>
        ))
      ) : (
        <NoResults>검색 결과가 없습니다.</NoResults>
      )}
    </PostList>
  );
}
const Content = styled.p``;
const Title = styled.h2``;
const PostSection = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProfilePart = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  flex: 1;
`;
const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`;

const PostList = styled.div`
  width: 700px;
  margin: 0 auto;
  margin-top: 50px;
`;

const PostItem = styled.div`
  margin-bottom: 50px;
`;

const NoResults = styled.div`
  color: #888;
  text-align: center;
  padding: 20px;
`;

export default SearchList;
