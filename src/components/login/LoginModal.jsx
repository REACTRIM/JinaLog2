import React from "react";
import ModalPortal from "../ModalPortal";
import "./LoginModal";

function LoginModal({ onClose }) {
  console.log("화긴");
  return (
    <ModalPortal>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <h2>Login</h2>
          <div>눌러라</div>
          {/* 로그인 폼 내용을 여기에 추가 */}
        </div>
      </div>
    </ModalPortal>
  );
}

export default LoginModal;
