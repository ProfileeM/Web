import "../assets/css/component/Modal.css";

const Modal = ({ isOpen, closeModal, notice }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{notice.title}</h3>
        <p>생성일: {notice.creationDate}</p>
        <p>{notice.content}</p>
        <button onClick={closeModal}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
