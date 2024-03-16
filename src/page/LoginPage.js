import Logo from "../components/Logo.js";
import Login from "../components/Login.js";
import "../assets/css/LoginPage.css";

function LoginPage() {
  return (
    <div className="home-title">
      <div className="home-logo">
        <Logo />
      </div>
      <div className="home-login">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
