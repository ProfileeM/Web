import "../assets/css/MyprofilePage.css";
import Header from "../components/Header";
import TitleMessage from "../components/TitleMessage";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function MyprofilePage() {
  const name = window.sessionStorage.getItem("name");

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="title-message">
        <TitleMessage name={name} message={"님의 프로필 카드예요."} />
      </div>
      <div>
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default MyprofilePage;
