import styled from "styled-components";
import find from "../../img/find.svg";
import { useEffect, useState } from "react";
import SearchList from "./SearchList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function SearchInput() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), // 문서의 데이터 및 id를 합침
        }));
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };
    fetchPosts(); // 데이터 불러오기 호출
  }, []);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setFilteredPosts([]); // 검색어가 비어 있을 때는 게시물 리스트를 비웁니다
    } else {
      const filtered = posts.filter(
        (post) =>
          post.content.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [search, posts]); // 검색어 또는 게시물 데이터가 변경될 때마다 호출

  return (
    <>
      <SearchBox>
        <SearchImg src={find} alt="검색" />
        <Searching
          value={search}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요"
        />
      </SearchBox>
      <SearchList posts={filteredPosts} />
    </>
  );
}
const SearchImg = styled.img`
  width: 30px;
`;

const SearchBox = styled.div`
  display: flex;
  height: 60px;
  border: 1px solid grey;
  width: 700px;
  margin: 0 auto;
  margin-top: 40px;
  gap: 15px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;
const Searching = styled.input`
  font-size: 25px;
  height: 100%;
  outline: none;
  border: none;
  align-items: center;
  background-color: rgb(248, 248, 248);
  flex: 1;
`;

export default SearchInput;
