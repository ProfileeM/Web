import "../assets/css/component/Footer.css";
import myProfileFooter from "../assets/img/myProfileFooter.svg";
import myProfileFooterActive from "../assets/img/myProfileFooterAcvtive.svg";
import profileWalletFooter from "../assets/img/profileWalletFooter.svg";
import groupManageFooter from "../assets/img/groupManageFooter.svg";
import moreFooter from "../assets/img/moreFooter.svg";
import homeFooter from "../assets/img/homeFooter.svg";
import { useNavigate } from "react-router-dom";
import moreFooterActive from "../assets/img/moreFooterActive.svg";

const Footer = () => {
  const uri = window.location.href.split("/");
  const path = uri[uri.length - 1];
  const navigate = useNavigate();

  const profileClick = () => {
    navigate("/myprofile");
  };

  const moreClick = () => {
    navigate("/more");
  };

  return (
    <div className="footer">
      {path === "myprofile" ? (
        <img
          src={myProfileFooterActive}
          alt="myProfile"
          onClick={profileClick}
        />
      ) : (
        <img src={myProfileFooter} alt="myProfile" onClick={profileClick} />
      )}
      <img src={profileWalletFooter} alt="profileWallet"></img>
      <img className="home-footer" src={homeFooter} alt="home"></img>
      <img src={groupManageFooter} alt="groupManage"></img>
      {path === ("more" || "notice") ? (
        <img src={moreFooterActive} alt="more" onClick={moreClick}></img>
      ) : (
        <img src={moreFooter} alt="more" onClick={moreClick}></img>
      )}
    </div>
  );
};

export default Footer;
