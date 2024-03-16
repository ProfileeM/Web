import "../assets/css/component/CreateTitle2.css";
import TitleBox from "../assets/img/titleBox.svg";

const CreateTitle2 = () => {
  return (
    <div className="create-title-2">
      <h3>나의</h3>
      <h3 className="mbti">MBTI</h3>
      <h3>는</h3>
      <img src={TitleBox} alt="box"></img>
      <h3>야.</h3>
    </div>
  );
};

export default CreateTitle2;
