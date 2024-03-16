import "../assets/css/component/CardBack.css";
import Bubble from "../assets/img/Bubble.svg";
import QR from "../assets/img/qrScanBtn.svg";

const CardBack = ({
  name,
  birthday,
  introduction,
  major,
  location,
  keyword1,
  keyword2,
  keyword3,
  keyword4,
}) => {
  return (
    <div className="card-back">
      <div className="card-back-t">
        <div className="card-back-title">
          <h2>{name}</h2>
          <img src={QR} alt="qr"></img>
        </div>
        <p className="card-back-intro">{introduction}</p>
      </div>
      <div className="line"></div>
      <div className="card-back-i">
        <h5>생일</h5>
        <p>{birthday}</p>
        <h5>거주지역</h5>
        <p>{location}</p>
        <h5>전공</h5>
        <p>{major}</p>
      </div>
      <div className="line"></div>
      <div>
        <div className="card-back-bubble-container">
          <img src={Bubble} alt="bubble"></img>
          <div className="card-back-text">{keyword1}</div>
        </div>
        <div className="card-back-bubble-container">
          <img src={Bubble} alt="bubble" className="left"></img>
          <div className="card-back-text">{keyword2}</div>
        </div>
        <div className="card-back-bubble-container">
          <img src={Bubble} alt="bubble"></img>
          <div className="card-back-text">{keyword3}</div>
        </div>
        <div className="card-back-bubble-container">
          <img src={Bubble} alt="bubble" className="left"></img>
          <div className="card-back-text">{keyword4}</div>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
