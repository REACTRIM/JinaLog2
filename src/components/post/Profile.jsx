import styled from "styled-components";
import myprofile from "../../img/myprofile.jpg";
import { useState } from "react";

function Profile() {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
    <ProfilePart>
      <ProfileImg src={myprofile} alt="profile img" />
      <MyProfile>
        <Part1>
          <Name>Jina</Name>
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
        </Part1>
        <Part2>
          <Intro>한줄소개 멍멍</Intro>
        </Part2>
      </MyProfile>
    </ProfilePart>
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
const Part1 = styled.div`
  display: flex;
  align-items: center;
`;
const Part2 = styled.div``;
const ProfilePart = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 30px;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 2px solid lightgrey;
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: 700;
  flex: 1;
`;
const Intro = styled.div`
  font-size: 20px;
  color: grey;
`;
const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
export default Profile;
