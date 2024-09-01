import ReactDom from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal");

  return el ? ReactDom.createPortal(children, el) : null;
};

export default ModalPortal;
