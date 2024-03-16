import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bubble from "../components/Bubble";
import Modal from "../components/Modal";

const MoreNoticePage = () => {
  const [noticeList, setNoticeList] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    fetchNoticeList();
  }, []);

  const fetchNoticeList = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + "/notice/"
      );
      if (response.ok) {
        const data = await response.json();
        setNoticeList(data.data);
      } else {
        throw new Error("Failed to fetch notice list");
      }
    } catch (error) {
      console.error("Error fetching notice list:", error);
    }
  };

  const openModal = (notice) => {
    setSelectedNotice(notice);
  };

  const closeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <div className="more-page-notice">
      <Header />
      <div className="main-notice">
        <Modal
          isOpen={selectedNotice !== null}
          closeModal={closeModal}
          notice={selectedNotice}
        />
        <h2>공지 사항</h2>
        <div className="notice-list">
          {noticeList.map((notice) => (
            <Bubble
              key={notice.noticeId}
              title={notice.title}
              onClick={() => openModal(notice)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoreNoticePage;
