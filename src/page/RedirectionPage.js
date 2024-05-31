import "../assets/css/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const RedirectionPage = () => {
  const code = window.location.search;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_SERVER_URL + `/user/oauth/kakao/login${code}`
        );
        const { name, accessToken } = response.data;
        window.sessionStorage.setItem("name", name);
        window.sessionStorage.setItem("accessToken", accessToken);
      } catch (error) {
        console.error("로그인 중 에러가 발생했습니다:", error);
      }
    };

    fetchData();
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default RedirectionPage;
