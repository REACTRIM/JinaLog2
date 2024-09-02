import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import alert from "../../img/alert.svg";
import find from "../../img/find.svg";
import earth from "../../img/earth.svg";
import myprofile from "../../img/myprofile.jpg";
import { useState } from "react";
import LoginModal from "../login/LoginModal";

function Header() {
  const navigate = useNavigate();
  /*const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  if (pathname === "/") {
    return (
      <Head>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          <LogoImg src={earth} alt="logo" />
          <div>JinaLog</div>
        </Logo>
        <Etc>
          <EtcImg src={alert} alt="알림" />
          <EtcImg src={find} alt="검색" />
          <Button onClick={openModal}>로그인</Button>
          {isModalOpen && <LoginModal onClose={closeModal} />}
        </Etc>
      </Head>
    );
  } else {*/
  return (
    <Head>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoImg src={earth} alt="logo" />
        <div>JinaLog</div>
      </Logo>
      <Etc>
        <EtcImg src={alert} alt="알림" />
        <EtcImg
          src={find}
          alt="검색"
          onClick={() => {
            navigate("./search");
          }}
        />
        <Button
          onClick={() => {
            navigate("./writePost");
          }}
        >
          새 글 작성
        </Button>
        <MyInfo>
          <MyImg src={myprofile} alt="My Profile" />
        </MyInfo>
      </Etc>
    </Head>
  );
}
//}
const MyImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
const MyInfo = styled.div``;

const Button = styled.button`
  border: 1px solid black;
  font-size: 17px;
  width: 110px;
  height: 35px;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 700;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const LogoImg = styled.img`
  width: 30px;
`;
const EtcImg = styled.img`
  width: 25px;
  cursor: pointer;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 25px;
  cursor: pointer;
  font-weight: 700;
`;

const Etc = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default Header;
