import styled from "styled-components";
import trending from "../../img/trending.svg";
import time from "../../img/time.svg";
import wifi from "../../img/wifi.svg";
import { useState } from "react";

function List() {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <Sorting>
      <BigSort>
        <ListPart isClicked={clickedIndex === 0} onClick={() => handleClick(0)}>
          <Icon src={trending} alt="icon" />
          트렌딩
        </ListPart>
        <ListPart isClicked={clickedIndex === 1} onClick={() => handleClick(1)}>
          <Icon src={time} alt="icon" />
          최신
        </ListPart>
        <ListPart isClicked={clickedIndex === 2} onClick={() => handleClick(2)}>
          <Icon src={wifi} alt="icon" />
          피드
        </ListPart>
      </BigSort>
    </Sorting>
  );
}
const ListPart = styled.div`
  cursor: pointer;
  padding: 5px;
  border-bottom: ${({ isClicked }) => (isClicked ? "3px solid black" : "none")};
`;

const Icon = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const BigSort = styled.div`
  gap: 30px;
  display: flex;
  font-size: 20px;
  align-items: center;
  font-weight: 600;
`;

const Sorting = styled.div`
  display: flex;
  margin: 20px;
`;

export default List;
