import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Box({ id, title, content, img, date }) {
  const navigate = useNavigate();

  return (
    <PostBox
      onClick={() => {
        navigate(`/post/${id}`);
      }}
    >
      <PostImg src={img} alt={title} />
      <PostSum>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </PostSum>
    </PostBox>
  );
}
const Date = styled.div``;
const PostSum = styled.div`
  margin: 10px;
  height: 50%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: 800;
`;

const Content = styled.div`
  font-size: 12px;
  flex: 1;
`;

const PostImg = styled.img`
  height: 50%;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 250px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-10px); /* 마우스 오버 시 요소를 위로 이동 */
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* 그림자를 추가하여 떠 있는 느낌을 줌 */
  }
`;

export default Box;
