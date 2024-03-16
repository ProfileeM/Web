import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./page/LoginPage.js";
import RedirectionPage from "./page/RedirectionPage.js";
import MyprofilePage from "./page/MyprofilePage.js";
import CreateCardPage from "./page/CreateCardPage.js";
import reportWebVitals from "./reportWebVitals.js";
import MorePage from "./page/MorePage.js";
import MoreNoticePage from "./page/MoreNoticePage.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    window.sessionStorage.getItem("accessToken")
  );

  useEffect(() => {
    const accessToken = window.sessionStorage.getItem("accessToken");
    setIsLoggedIn(accessToken !== null);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/oauth2/kakao/" element={<RedirectionPage />} />
          {/* 사용자가 로그인한 경우 */}
          {isLoggedIn ? (
            <>
              <Route path="/myprofile/" element={<MyprofilePage />} />
              <Route
                path="/myprofile/create/card"
                element={<CreateCardPage />}
              />
              <Route path="/more/" element={<MorePage />} />
              <Route path="/more/notice" element={<MoreNoticePage />} />
            </>
          ) : (
            // 로그인되지 않은 상태에서 접근 시 리디렉션
            <Route path="/*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();
