import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import emptyCard from "../assets/img/createCard.svg";
import "../assets/css/component/Cards.css";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

async function fetchUserCards(token) {
  try {
    const response = await fetch(process.env.REACT_APP_SERVER_URL + "/card", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user cards");
    }
    const data = await response.json();
    return data.data; // API에서 반환하는 카드 목록
  } catch (error) {
    console.error("Error fetching user cards:", error);
    throw error;
  }
}

const Cards = () => {
  const navigate = useNavigate();
  const [userCards, setUserCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserCards(window.sessionStorage.getItem("accessToken"))
      .then((cards) => {
        setUserCards(cards);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user cards:", error);
        setLoading(false);
      });
  }, []); // []를 넣어 한 번만 호출되도록 함

  useEffect(() => {
    fetchUserCards(window.sessionStorage.getItem("accessToken"))
      .then((cards) => {
        setUserCards(cards);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user cards:", error);
        setLoading(false);
      });
  }, []); // []를 넣어 한 번만 호출되도록 함

  const createCard = () => {
    navigate("/myprofile/create/card/");
  };

  return (
    <div className="cards">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {userCards.map((card, index) => (
            <SwiperSlide key={index}>
              <img src={card.frontImageBase64} className="card" alt="card" />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <img
              className="card"
              src={emptyCard}
              onClick={createCard}
              alt="empty-card"
            ></img>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default Cards;
