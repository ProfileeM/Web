import kakao from "../assets/img/kakaoLogin.svg";
import "../assets/css/style.css";

const Login = () => {
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = kakaoURL;
  };
  return <img src={kakao} onClick={kakaoLogin} alt="login" />;
};

export default Login;
