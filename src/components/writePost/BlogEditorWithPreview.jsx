// src/components/BlogEditor.js
import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db } from "../../firebase"; // Firestore를 초기화한 Firebase 파일에서 가져오기
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function BlogEditor({ onSave }) {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const quillRef = useRef(null);

  // 이미지 업로드 핸들러
  /*const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
        try {
          // 파일 업로드
          await uploadBytes(storageRef, file);
          // 다운로드 URL 가져오기
          const url = await getDownloadURL(storageRef);
          // Quill 에디터에 이미지 삽입
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, "image", url);
        } catch (error) {
          console.error("이미지 업로드 실패:", error);
        }
      }
    };
  };
*/
  // Quill 모듈 설정
  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
      ],
      /*handlers: {
        image: imageHandler,
      },*/
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleClickButton = () => {
    handleSave();
    navigate("/");
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSave = async () => {
    try {
      console.log("오키");
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: content,
        createdAt: new Date().getTime(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Post saved successfully!");
      if (onSave) {
        onSave(docRef.id); // 저장된 문서의 ID를 부모 컴포넌트로 전달
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <WritePostPage>
      <WritePart>
        <TitleInput
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
        ></TitleInput>
        <ReactQuill
          ref={quillRef}
          value={content}
          onChange={handleContentChange}
          placeholder="Write something awesome..."
          modules={modules}
          formats={formats}
        />

        <button onClick={handleClickButton}>Save</button>
      </WritePart>

      <PreviewPart>
        <div className="preview">
          <h2>Preview</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </PreviewPart>
    </WritePostPage>
  );
}

const TitleInput = styled.input`
  font-size: 30px;
  margin-bottom: 30px;
  border: none;
  background-color: rgb(248, 248, 248);
`;
const WritePostPage = styled.div`
  display: flex;
  gap: 50px;
  margin: 40px;
`;

const WritePart = styled.div`
  width: 50%;
`;
const PreviewPart = styled.div`
  width: 50%;
`;

export default BlogEditor;
