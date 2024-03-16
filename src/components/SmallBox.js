import smallBox from "../assets/img/smallBox.svg";
import smallBoxActive from "../assets/img/smallBoxActive.svg";
import "../assets/css/component/SmallBox.css";

const SmallBox = ({ text, onClick, isSelected }) => {
  return (
    <div className="box-container" onClick={onClick}>
      <img src={isSelected ? smallBoxActive : smallBox} alt="box" />
      <div className="text">{text}</div>
    </div>
  );
};

export default SmallBox;
