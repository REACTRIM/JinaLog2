import { useState } from "react";
import styled from "styled-components";

function PostTitle({ title, name, date }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };
  const handleClickButton = () => {
    setIsClicked(!isClicked);
  };

  const handleEnterButton = () => {
    setIsHovered(true);
  };
  const handleLeaveButton = () => {
    setIsHovered(false);
  };
  return (
    <TitlePart>
      <Title>{title}</Title>
      <Etc>
        <User>Jina</User>
        <DateSection>{formatDate(date)}</DateSection>
        <Button
          isClicked={isClicked}
          onClick={handleClickButton}
          onMouseEnter={handleEnterButton}
          onMouseLeave={handleLeaveButton}
        >
          {isClicked && isHovered
            ? "언팔로우"
            : isClicked
            ? "팔로잉"
            : "팔로우"}
        </Button>
      </Etc>
    </TitlePart>
  );
}
const Button = styled.button`
  width: 100px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isClicked ? "black" : "green")};
  border: ${(props) =>
    props.isClicked ? "1px solid black" : "1px solid green"};
  border-radius: 20px;
  cursor: pointer;

  ${(props) =>
    props.isClicked &&
    `&:hover{
    color:red;
    border:1px solid red;}`}
`;
const Etc = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const User = styled.div`
  font-weight: 600;
`;
const DateSection = styled.div`
  color: grey;
  flex: 1;
`;
const TitlePart = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 40px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 3px;
`;

export default PostTitle;
