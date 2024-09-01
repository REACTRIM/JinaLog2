import styled from "styled-components";
import myprofile from "../../img/myprofile.jpg";

function CommentItem({ comment }) {
  const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };
  return (
    <CommentItemPart>
      <ProfilePart>
        <ProfileImg src={myprofile} alt="profile img" />
        <MyProfile>
          <Name>Jina</Name>
          <CurrentDate>{formatDate()}</CurrentDate>
        </MyProfile>
      </ProfilePart>
      <MyComment>{comment}</MyComment>
    </CommentItemPart>
  );
}
const MyComment = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: 25px;
  margin-bottom: 25px;
`;
const CommentItemPart = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid lightgrey;
`;
const ProfilePart = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`;
const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Name = styled.div`
  font-size: 16px;
`;
const CurrentDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: grey;
`;

export default CommentItem;
