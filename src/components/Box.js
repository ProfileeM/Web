import mbtiBox from "../assets/img/Box.svg";
import mbtiBoxActive from "../assets/img/BoxActive.svg";
import "../assets/css/component/Box.css";

const Box = ({ text, onClick, isSelected }) => {
  return (
    <div className="box-container" onClick={onClick}>
      <img src={isSelected ? mbtiBoxActive : mbtiBox} alt="box" />
      <div className="text">{text}</div>
    </div>
  );
};

export default Box;
