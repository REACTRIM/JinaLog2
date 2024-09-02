import styled from "styled-components";
import myprofile from "../../img/myprofile.jpg";
import { forwardRef } from "react";

const CommentItem = forwardRef(({ content, author, createdAt }, ref) => {
  console.log(content);
  const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };
  return (
    <div ref={ref}>
      <CommentItemPart>
        <ProfilePart>
          <ProfileImg src={myprofile} alt="profile img" />
          <MyProfile>
            <Name>Jina</Name>
            <CurrentDate>{formatDate()}</CurrentDate>
          </MyProfile>
          <Detail>
            <Fix>수정</Fix>
            <Delete>삭제</Delete>
          </Detail>
        </ProfilePart>
        <MyComment>{content}</MyComment>
      </CommentItemPart>
    </div>
  );
});
const Detail = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  color: grey;
`;
const Fix = styled.div`
  cursor: pointer;
`;
const Delete = styled.div`
  cursor: pointer;
`;
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
  width: 100%;
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
  flex: 1;
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
