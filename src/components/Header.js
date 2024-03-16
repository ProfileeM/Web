import "../assets/css/component/Header.css";
import HeaderLogoImg from "../assets/img/headerLogo.svg";
import qrScanBtn from "../assets/img/qrScanBtn.svg";
import bell from "../assets/img/bell.svg";

const Header = () => {
  return (
    <header className="home-header">
      <div className="header-qrscan">
        <img src={qrScanBtn} alt="header-qrscan"></img>
      </div>
      <div className="header-logo">
        <img src={HeaderLogoImg} alt="header-logo"></img>
      </div>
      <div className="header-bell">
        <img src={bell} alt="header-bell"></img>
      </div>
    </header>
  );
};

export default Header;
