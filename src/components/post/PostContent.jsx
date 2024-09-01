import styled from "styled-components";

function PostContent({ img, content }) {
  return (
    <ContentPart>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </ContentPart>
  );
}

const ContentPart = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentImg = styled.img`
  width: 60%;
  margin-bottom: 50px;
`;
const Content = styled.div`
  font-size: 20px;
  text-align: left;
  width: 100%;
`;

export default PostContent;
