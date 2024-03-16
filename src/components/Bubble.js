import b from "../assets/img/Bubble.svg";
import "../assets/css/component/bubble.css";

const Bubble = ({ title, onClick }) => {
  return (
    <div className="bubble-container" onClick={onClick}>
      <img src={b} alt="bubble"></img>
      <div className="text">{title}</div>
    </div>
  );
};

export default Bubble;
