import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css/MorePage.css";
import { useNavigate } from "react-router-dom";

function MorePage() {
  const navigate = useNavigate();
  const noticeClick = () => {
    navigate("/more/notice");
  };

  return (
    <div className="more-page">
      <Header />
      <div className="main-more">
        <h2>더 보기</h2>
        <h3 onClick={noticeClick}>공지사항</h3>
        <h3>환경설정</h3>
      </div>
      <Footer />
    </div>
  );
}

export default MorePage;
