import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import CreateNum from "../components/CreateNum";
import TitleMessage from "../components/TitleMessage";
import "../assets/css/CreateNumPage.css";
import nextButton from "../assets/img/nextButton.svg";
import nextButtonActive from "../assets/img/nextButtonActive.svg";
import Input from "../components/Input";
import CreateTitle2 from "../components/CreateTitle2";
import Box from "../components/Box";
import CreateTitle3 from "../components/CreateTitle3";
import CreateTitle4 from "../components/CreateTitle4";
import CreateTitle5 from "../components/CreateTitle5";
import CreateTitle6 from "../components/CreateTitle6";
import SmallBox from "../components/SmallBox";
import SP1 from "../assets/img/smallPicture1.svg";
import SP2 from "../assets/img/smallPicture2.svg";
import SP3 from "../assets/img/smallPicture3.svg";
import SP4 from "../assets/img/smallPicture4.svg";
import SP5 from "../assets/img/smallPicture5.svg";
import SP6 from "../assets/img/smallPicture6.svg";
import SP7 from "../assets/img/smallPicture7.svg";
import SP8 from "../assets/img/smallPicture8.svg";
import bigFrame1 from "../assets/img/BigPicture1.svg";
import bigFrame2 from "../assets/img/BigPicture2.png";
import bigFrame3 from "../assets/img/BigPicture1.svg";
import bigFrame4 from "../assets/img/BigPicture3.svg";
import bigFrame5 from "../assets/img/BigPicture3.svg";
import bigFrame6 from "../assets/img/BigPicture3.svg";
import bigFrame7 from "../assets/img/BigPicture3.svg";
import bigFrame8 from "../assets/img/BigPicture3.svg";
import html2canvas from "html2canvas";
import UploadBtn from "../assets/img/UploadBtn.svg";
import CardBack from "../components/CardBack";
import LastCheck from "../assets/img/LastCheck.svg";
import { useNavigate } from "react-router-dom";

function CreateCardPage() {
  const [num, setNum] = useState(1);
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [birthday, setBirthday] = useState("");
  const [major, setMajor] = useState("");
  const [location, setLocation] = useState("");
  const [isAllFilled1, setIsAllFilled1] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedDrinkBox, setSelectedDrinkBox] = useState(null);
  const [selectedFoodBox, setSelectedFoodBox] = useState([]);
  const [selectedKeywordBox, setSelectedKeywordBox] = useState([]);
  const [selectedImage, setSelectedImage] = useState(1);
  const [isAllFilled2, setIsAllFilled2] = useState(false);
  const [isAllFilled3, setIsAllFilled3] = useState(false);
  const [isAllFilled4, setIsAllFilled4] = useState(false);
  const [isAllFilled5, setIsAllFilled5] = useState(false);
  const [isAllFilled6, setIsAllFilled6] = useState(false);
  const [hobby1, setHobby1] = useState("");
  const [hobby2, setHobby2] = useState("");
  const [hobby3, setHobby3] = useState("");
  const [hobby4, setHobby4] = useState("");
  const [hobby5, setHobby5] = useState("");
  const [bigFrameImage, setBigFrameImage] = useState(bigFrame1);
  const [createdImage, setCreatedImage] = useState(null);
  const bigFrameRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAllFilled1(
      !(
        name === "" ||
        introduction === "" ||
        birthday === "" ||
        major === "" ||
        location === ""
      )
    );
  }, [name, introduction, birthday, major, location]);

  useEffect(() => {
    setIsAllFilled2(selectedBox !== null);
  }, [selectedBox]);

  useEffect(() => {
    setIsAllFilled3(selectedFoodBox.length !== 0);
  }, [selectedFoodBox]);

  useEffect(() => {
    setIsAllFilled4(selectedDrinkBox !== null);
  }, [selectedDrinkBox]);

  useEffect(() => {
    setIsAllFilled5(!(hobby1 === ""));
  }, [hobby1]);

  useEffect(() => {
    setIsAllFilled6(selectedKeywordBox.length === 4);
  }, [selectedKeywordBox]);

  useEffect(() => {
    switch (selectedImage) {
      case 1:
        setBigFrameImage(bigFrame1);
        break;
      case 2:
        setBigFrameImage(bigFrame2);
        break;
      case 3:
        setBigFrameImage(bigFrame3);
        break;
      case 4:
        setBigFrameImage(bigFrame4);
        break;
      case 5:
        setBigFrameImage(bigFrame5);
        break;
      case 6:
        setBigFrameImage(bigFrame6);
        break;
      case 7:
        setBigFrameImage(bigFrame7);
        break;
      case 8:
        setBigFrameImage(bigFrame8);
        break;
      default:
        setBigFrameImage(bigFrame1);
        break;
    }
  }, [selectedImage]);

  const next = () => {
    if (num < 7) {
      setNum((prevNum) => prevNum + 1);
    }
  };

  const next7 = () => {
    const xRatio = 0.46; // 가로 비율
    const yRatio = 0.53; // 세로 비율

    const body = document.body;

    // HTML2Canvas를 사용하여 body 요소를 캡처하여 캔버스로 변환
    html2canvas(body).then((canvas) => {
      // 캡처된 이미지의 가로와 세로 크기 구하기
      const width = canvas.width;
      const height = canvas.height;

      // 원하는 위치의 좌표 계산
      const x = width * xRatio;
      const y = height * yRatio;

      // 캡처된 이미지에서 원하는 위치의 부분 이미지를 추출
      const ctx = canvas.getContext("2d");
      const cropWidth = 380; // 추출할 부분의 가로 크기
      const cropHeight = 600; // 추출할 부분의 세로 크기
      const imageData = ctx.getImageData(
        x - cropWidth / 2,
        y - cropHeight / 2,
        cropWidth,
        cropHeight
      );

      // 추출한 부분 이미지를 새로운 캔버스에 그림
      const croppedCanvas = document.createElement("canvas");
      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;
      const croppedCtx = croppedCanvas.getContext("2d");
      croppedCtx.putImageData(imageData, 0, 0);

      // 캔버스를 이미지 데이터 URL로 변환
      const croppedImageData = croppedCanvas.toDataURL("image/png");
      setCreatedImage(croppedImageData);

      setNum((prevNum) => prevNum + 1);
    });
  };

  const back = () => {
    if (num > 1) {
      setNum((prevNum) => prevNum - 1);
    } else {
      window.history.back();
    }
  };

  const lastCheck = () => {
    let hobbys = [];
    if (hobby1 !== "") {
      hobbys.push(hobby1);
    }
    if (hobby2 !== "") {
      hobbys.push(hobby2);
    }
    if (hobby3 !== "") {
      hobbys.push(hobby3);
    }
    if (hobby4 !== "") {
      hobbys.push(hobby4);
    }
    if (hobby5 !== "") {
      hobbys.push(hobby5);
    }

    // 서버에 데이터 전송
    const requestData = {
      name: name,
      intro: introduction,
      birth: birthday,
      major: major,
      residence: location,
      mbti: selectedBox,
      food: selectedFoodBox.toString(),
      drink: selectedDrinkBox,
      interest: hobbys.toString(),
      frontImageBase64: createdImage,
      keyword1: selectedKeywordBox[0],
      keyword2: selectedKeywordBox[1],
      keyword3: selectedKeywordBox[2],
      keyword4: selectedKeywordBox[3],
      qr_image: "임시",
    };


    fetch(process.env.REACT_APP_SERVER_URL + "/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.sessionStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("서버 응답 실패");
        }
        console.log("서버 응답 성공");
        // myprofile 페이지로 이동
        navigate("/myprofile");
      })
      .catch((error) => {
        console.error("서버 요청 실패:", error);
      });
  };

  const mbtiClick = (text) => {
    setSelectedBox(selectedBox !== text ? text : null);
  };

  const foodClick = (text) => {
    if (!selectedFoodBox.includes(text)) {
      setSelectedFoodBox((prevSelectedFoodBox) => [
        ...prevSelectedFoodBox,
        text,
      ]);
    } else {
      setSelectedFoodBox((prevSelectedFoodBox) =>
        prevSelectedFoodBox.filter((item) => item !== text)
      );
    }
  };

  const drinkClick = (text) => {
    setSelectedDrinkBox(selectedDrinkBox !== text ? text : null);
  };

  const keywordClick = (text) => {
    if (!selectedKeywordBox.includes(text)) {
      setSelectedKeywordBox((prevSelectedKeywordBox) => [
        ...prevSelectedKeywordBox,
        text,
      ]);
    } else {
      setSelectedKeywordBox((prevSelectedKeywordBox) =>
        prevSelectedKeywordBox.filter((item) => item !== text)
      );
    }
  };

  const imageClick = (n) => {
    setSelectedImage(n);
  };

  const [uploadImgUrl, setUploadImgUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleMouseWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY || e.detail || e.wheelDelta;
    const newScaleFactor = scaleFactor + (delta > 0 ? -0.1 : 0.1);
    if (newScaleFactor >= 0.1 && newScaleFactor <= 2) {
      setScaleFactor(newScaleFactor);
    }
  };

  const onchangeImageUpload = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setUploadImgUrl(reader.result);
    };
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStartX(e.clientX);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const deltaX = e.clientX - dragStartX;
      const deltaY = e.clientY - dragStartY;
      setOffsetX(offsetX + deltaX);
      setOffsetY(offsetY + deltaY);
      setDragStartX(e.clientX);
      setDragStartY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="create-card">
      <div className="header">
        <Header />
      </div>
      <div className="create-num">
        <h1 className="back" onClick={back}>
          &lt;
        </h1>
        <CreateNum num={num} />
      </div>
      {num === 1 ? (
        <div className="create-container1">
          <div className="title-message">
            <TitleMessage message={"프로필을 작성해주세요."} />
            <div className="small-title-message">
              <p>* 표시는 필수 입력 정보예요.</p>
            </div>
          </div>
          <div className="main">
            <div className="input-container">
              <Input
                message={"이름*"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                message={"한줄소개* (최대20자)"}
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
              />
              <Input
                message={"생일*"}
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <Input
                message={"전공*"}
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
              <Input
                message={"거주 지역*"}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <footer className="next-button">
            {isAllFilled1 ? (
              <img
                className="active"
                src={nextButtonActive}
                alt="next-button"
                onClick={next}
              />
            ) : (
              <img src={nextButton} alt="next-button" />
            )}
          </footer>
        </div>
      ) : num === 2 ? (
        <div className="create-container2">
          <div className="title-message">
            <CreateTitle2 />
            <div className="small-title-message">
              <p>* 하나만 선택해 주세요.</p>
            </div>
          </div>
          <div className="main">
            <div className="mbti-container">
              <div className="layer-1">
                <Box
                  text={"#ISTJ"}
                  isSelected={selectedBox === "#ISTJ"}
                  onClick={() => mbtiClick("#ISTJ")}
                ></Box>
                <Box
                  text={"#ISFJ"}
                  isSelected={selectedBox === "#ISFJ"}
                  onClick={() => mbtiClick("#ISFJ")}
                ></Box>
                <Box
                  text={"#INFJ"}
                  isSelected={selectedBox === "#INFJ"}
                  onClick={() => mbtiClick("#INFJ")}
                ></Box>
              </div>
              <div className="layer-2">
                <Box
                  text={"#INTJ"}
                  isSelected={selectedBox === "#INTJ"}
                  onClick={() => mbtiClick("#INTJ")}
                ></Box>
                <Box
                  text={"#ISTP"}
                  isSelected={selectedBox === "#ISTP"}
                  onClick={() => mbtiClick("#ISTP")}
                ></Box>
                <Box
                  text={"#ISFP"}
                  isSelected={selectedBox === "#ISFP"}
                  onClick={() => mbtiClick("#ISFP")}
                ></Box>
              </div>
              <div className="layer-3">
                <Box
                  text={"#INFP"}
                  isSelected={selectedBox === "#INFP"}
                  onClick={() => mbtiClick("#INFP")}
                ></Box>
                <Box
                  text={"#INTP"}
                  isSelected={selectedBox === "#INTP"}
                  onClick={() => mbtiClick("#INTP")}
                ></Box>
                <Box
                  text={"#ESTP"}
                  isSelected={selectedBox === "#ESTP"}
                  onClick={() => mbtiClick("#ESTP")}
                ></Box>
              </div>
              <div className="layer-4">
                <Box
                  text={"#ESFP"}
                  isSelected={selectedBox === "#ESFP"}
                  onClick={() => mbtiClick("#ESFP")}
                ></Box>
                <Box
                  text={"#ENFP"}
                  isSelected={selectedBox === "#ENFP"}
                  onClick={() => mbtiClick("#ENFP")}
                ></Box>
                <Box
                  text={"#ENTP"}
                  isSelected={selectedBox === "#ENTP"}
                  onClick={() => mbtiClick("#ENTP")}
                ></Box>
              </div>
              <div className="layer-5">
                <Box
                  text={"#ESTJ"}
                  isSelected={selectedBox === "#ESTJ"}
                  onClick={() => mbtiClick("#ESTJ")}
                ></Box>
                <Box
                  text={"#ESFJ"}
                  isSelected={selectedBox === "#ESFJ"}
                  onClick={() => mbtiClick("#ESFJ")}
                ></Box>
                <Box
                  text={"#ENFJ"}
                  isSelected={selectedBox === "#ENFJ"}
                  onClick={() => mbtiClick("#ENFJ")}
                ></Box>
              </div>
              <div className="layer-6">
                <Box
                  text={"#ENTJ"}
                  isSelected={selectedBox === "#ENTJ"}
                  onClick={() => mbtiClick("#ENTJ")}
                ></Box>
              </div>
            </div>
          </div>
          <footer className="next-button">
            {isAllFilled2 ? (
              <img
                className="active"
                src={nextButtonActive}
                alt="next-button"
                onClick={next}
              />
            ) : (
              <img src={nextButton} alt="next-button" />
            )}
          </footer>
        </div>
      ) : num === 3 ? (
        <div className="create-container3">
          <div className="title-message">
            <CreateTitle3 />
            <div className="small-title-message">
              <p>* 복수선택이 가능해요.</p>
            </div>
          </div>
          <div className="main">
            <div className="food-container">
              <div className="layer-1">
                <Box
                  text={"#다 잘먹음"}
                  isSelected={selectedFoodBox.includes("#다 잘먹음")}
                  onClick={() => foodClick("#다 잘먹음")}
                ></Box>
                <Box
                  text={"#고수"}
                  isSelected={selectedFoodBox.includes("#고수")}
                  onClick={() => foodClick("#고수")}
                ></Box>
                <Box
                  text={"#오이"}
                  isSelected={selectedFoodBox.includes("#오이")}
                  onClick={() => foodClick("#오이")}
                ></Box>
              </div>
              <div className="layer-2">
                <Box
                  text={"#생선회"}
                  isSelected={selectedFoodBox.includes("#생선회")}
                  onClick={() => foodClick("#생선회")}
                ></Box>
                <Box
                  text={"#닭발"}
                  isSelected={selectedFoodBox.includes("#닭발")}
                  onClick={() => foodClick("#닭발")}
                ></Box>
                <Box
                  text={"#곱창"}
                  isSelected={selectedFoodBox.includes("#곱창")}
                  onClick={() => foodClick("#곱창")}
                ></Box>
              </div>
              <div className="layer-3">
                <Box
                  text={"#마라"}
                  isSelected={selectedFoodBox.includes("#마라")}
                  onClick={() => foodClick("#마라")}
                ></Box>
                <Box
                  text={"#족발"}
                  isSelected={selectedFoodBox.includes("#족발")}
                  onClick={() => foodClick("#족발")}
                ></Box>
                <Box
                  text={"#견과류"}
                  isSelected={selectedFoodBox.includes("#견과류")}
                  onClick={() => foodClick("#견과류")}
                ></Box>
              </div>
              <div className="layer-4">
                <Box
                  text={"#복숭아"}
                  isSelected={selectedFoodBox.includes("#복숭아")}
                  onClick={() => foodClick("#복숭아")}
                ></Box>
                <Box
                  text={"#돼지껍데기"}
                  isSelected={selectedFoodBox.includes("#돼지껍데기")}
                  onClick={() => foodClick("#돼지껍데기")}
                ></Box>
                <Box
                  text={"#홍어"}
                  isSelected={selectedFoodBox.includes("#홍어")}
                  onClick={() => foodClick("#홍어")}
                ></Box>
              </div>
              <div className="layer-5">
                <Box
                  text={"#깻잎"}
                  isSelected={selectedFoodBox.includes("#깻잎")}
                  onClick={() => foodClick("#깻잎")}
                ></Box>
                <Box
                  text={"#산낙지"}
                  isSelected={selectedFoodBox.includes("#산낙지")}
                  onClick={() => foodClick("#산낙지")}
                ></Box>
                <Box
                  text={"#민트초코"}
                  isSelected={selectedFoodBox.includes("#민트초코")}
                  onClick={() => foodClick("#민트초코")}
                ></Box>
              </div>
            </div>
          </div>
          <footer className="next-button">
            {isAllFilled3 ? (
              <img
                className="active"
                src={nextButtonActive}
                alt="next-button"
                onClick={next}
              />
            ) : (
              <img src={nextButton} alt="next-button" />
            )}
          </footer>
        </div>
      ) : num === 4 ? (
        <div className="create-container4">
          <div className="title-message">
            <CreateTitle4 />
            <div className="small-title-message">
              <p>* 하나만 선택해주세요.</p>
            </div>
          </div>
          <div className="main">
            <div className="drink-container">
              <div className="layer-1">
                <Box
                  text={"#술 못마심"}
                  isSelected={selectedDrinkBox === "#술 못마심"}
                  onClick={() => drinkClick("#술 못마심")}
                ></Box>
                <Box
                  text={"#소주"}
                  isSelected={selectedDrinkBox === "#소주"}
                  onClick={() => drinkClick("#소주")}
                ></Box>
                <Box
                  text={"#맥주"}
                  isSelected={selectedDrinkBox === "#맥주"}
                  onClick={() => drinkClick("#맥주")}
                ></Box>
              </div>
              <div className="layer-2">
                <Box
                  text={"#와인"}
                  isSelected={selectedDrinkBox === "#와인"}
                  onClick={() => drinkClick("#와인")}
                ></Box>
                <Box
                  text={"#막걸리"}
                  isSelected={selectedDrinkBox === "#막걸리"}
                  onClick={() => drinkClick("#막걸리")}
                ></Box>
                <Box
                  text={"#칵테일"}
                  isSelected={selectedDrinkBox === "#칵테일"}
                  onClick={() => drinkClick("#칵테일")}
                ></Box>
              </div>
              <div className="layer-3">
                <Box
                  text={"#양주"}
                  isSelected={selectedDrinkBox === "#양주"}
                  onClick={() => drinkClick("#양주")}
                ></Box>
                <Box
                  text={"#사케"}
                  isSelected={selectedDrinkBox === "#사케"}
                  onClick={() => drinkClick("#사케")}
                ></Box>
                <Box
                  text={"#과일소주"}
                  isSelected={selectedDrinkBox === "#과일소주"}
                  onClick={() => drinkClick("#과일소주")}
                ></Box>
              </div>
            </div>
          </div>
          <footer className="next-button">
            {isAllFilled4 ? (
              <img
                className="active"
                src={nextButtonActive}
                alt="next-button"
                onClick={next}
              />
            ) : (
              <img src={nextButton} alt="next-button" />
            )}
          </footer>
        </div>
      ) : num === 5 ? (
        <div className="create-container5">
          <div className="title-message">
            <CreateTitle5 />
            <div className="small-title-message">
              <p>* 관심있는 분야를 단어로 작성해주세요.</p>
              <p className="more">ex) 자전거 타기, 축구, 음악 감상</p>
            </div>
          </div>
          <div className="main">
            <div className="input-container2">
              <Input
                message={"관심분야 1*"}
                value={hobby1}
                onChange={(e) => setHobby1(e.target.value)}
              />
              <Input
                message={"관심분야 2"}
                value={hobby2}
                onChange={(e) => setHobby2(e.target.value)}
              />
              <Input
                message={"관심분야 3"}
                value={hobby3}
                onChange={(e) => setHobby3(e.target.value)}
              />
              <Input
                message={"관심분야 4"}
                value={hobby4}
                onChange={(e) => setHobby4(e.target.value)}
              />
              <Input
                message={"관심분야 5"}
                value={hobby5}
                onChange={(e) => setHobby5(e.target.value)}
              />
            </div>
          </div>
          <footer className="next-button">
            {isAllFilled5 ? (
              <img
                className="active"
                src={nextButtonActive}
                alt="next-button"
                onClick={next}
              />
            ) : (
              <img src={nextButton} alt="next-button" />
            )}
          </footer>
        </div>
      ) : num === 6 ? (
        <div className="create-container6">
          <div className="title-message">
            <CreateTitle6 name={window.sessionStorage.getItem("name")} />
            <div className="small-title-message">
              <p>* 4개를 선택해주세요.</p>
            </div>
          </div>
          <div className="main">
            <div className="keyword-selection-container">
              <div className="mbti-keyword-box">
                <h4 className="keyword">MBTI</h4>
                <div className="boxes">
                  <SmallBox
                    text={selectedBox}
                    onClick={() => keywordClick(selectedBox)}
                    isSelected={selectedKeywordBox.includes(selectedBox)}
                  />
                </div>
              </div>
              <div className="food-keyword-box">
                <h4 className="keyword">못 먹는 음식</h4>
                <div className="boxes">
                  {selectedFoodBox.map((food, index) => (
                    <SmallBox
                      key={index}
                      text={food}
                      onClick={() => keywordClick(food)}
                      isSelected={selectedKeywordBox.includes(food)}
                    />
                  ))}
                </div>
              </div>
              <div className="drink-keyword-box">
                <h4 className="keyword">주종</h4>
                <div className="boxes">
                  <SmallBox
                    text={selectedDrinkBox}
                    onClick={() => keywordClick(selectedDrinkBox)}
                    isSelected={selectedKeywordBox.includes(selectedDrinkBox)}
                  />
                </div>
              </div>
              <div className="hobby-keyword-box">
                <h4 className="keyword">관심분야</h4>
                <div className="boxes">
                  <SmallBox
                    text={hobby1}
                    onClick={() => keywordClick(hobby1)}
                    isSelected={selectedKeywordBox.includes(hobby1)}
                  />
                  {hobby2 !== "" ? (
                    <SmallBox
                      text={hobby2}
                      onClick={() => keywordClick(hobby2)}
                      isSelected={selectedKeywordBox.includes(hobby2)}
                    />
                  ) : null}
                  {hobby3 !== "" ? (
                    <SmallBox
                      text={hobby3}
                      onClick={() => keywordClick(hobby3)}
                      isSelected={selectedKeywordBox.includes(hobby3)}
                    />
                  ) : null}
                  {hobby4 !== "" ? (
                    <SmallBox
                      text={hobby4}
                      onClick={() => keywordClick(hobby4)}
                      isSelected={selectedKeywordBox.includes(hobby4)}
                    />
                  ) : null}
                  {hobby5 !== "" ? (
                    <SmallBox
                      text={hobby5}
                      onClick={() => keywordClick(hobby5)}
                      isSelected={selectedKeywordBox.includes(hobby5)}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <footer className="next-button">
            {isAllFilled6 ? (
              <img
                className="active"
                src={nextButtonActive}
                alt="next-button"
                onClick={next}
              />
            ) : (
              <img src={nextButton} alt="next-button" />
            )}
          </footer>
        </div>
      ) : num === 7 ? (
        <div className="create-container7">
          <div className="title-message">
            <TitleMessage message={"프로필카드를 꾸며보세요."} />
            <div className="small-title-message">
              <p>* +버튼을 더블 클릭하면 사진을 추가할 수 있어요.</p>
            </div>
          </div>
          <div className="main">
            <div className="big-frame-image">
              <div className="upload-image-container">
                {uploadImgUrl ? (
                  <img
                    src={uploadImgUrl}
                    alt="uploaded-image"
                    onDoubleClick={handleImageClick}
                    className="uploaded-image-selected"
                    onWheel={handleMouseWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    style={{
                      transform: `scale(${scaleFactor}) translate(${offsetX}px, ${offsetY}px)`,
                      cursor: dragging ? "grabbing" : "grab",
                    }}
                  />
                ) : (
                  <img
                    src={UploadBtn}
                    alt="uploaded-image"
                    onDoubleClick={handleImageClick}
                    className="uploaded-image"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={onchangeImageUpload}
                />
              </div>
              <img
                src={bigFrameImage}
                alt="frame-image"
                className="big-frame-image"
                ref={bigFrameRef}
              />
            </div>
            <div className="smallPictures">
              <div className="frame-layer-1">
                <img
                  src={SP1}
                  alt="small-frame"
                  className={
                    selectedImage === 1 ? "small-frame-selected" : "small-frame"
                  }
                  onClick={() => {
                    imageClick(1);
                  }}
                ></img>
                <img
                  src={SP2}
                  alt="small-frame"
                  className={
                    selectedImage === 2 ? "small-frame-selected" : "small-frame"
                  }
                  onClick={() => {
                    imageClick(2);
                  }}
                ></img>
                <img
                  src={SP3}
                  alt="small-frame"
                  className={
                    selectedImage === 3 ? "small-frame-selected" : "small-frame"
                  }
                  onClick={() => {
                    imageClick(3);
                  }}
                ></img>
                <img
                  src={SP4}
                  alt="small-frame"
                  className={
                    selectedImage === 4 ? "small-frame-selected" : "small-frame"
                  }
                  onClick={() => {
                    imageClick(4);
                  }}
                ></img>
              </div>
              <div className="frame-layer-2">
                <img
                  src={SP5}
                  alt="small-frame"
                  className={
                    selectedImage === 5 ? "small-frame-selected" : "small-frame"
                  }
                  onClick={() => {
                    imageClick(5);
                  }}
                ></img>
                <img
                  src={SP6}
                  alt="small-frame"
                  className={
                    selectedImage === 6 ? "small-frame-selected" : "small-frame"
                  }
                  onClick={() => {
                    imageClick(6);
                  }}
                ></img>
                <img
                  src={SP7}
                  alt="small-frame"
                  className={
                    selectedImage === 7 ? "small-frame-selected" : "small-frame"
                  }
                  onClick={() => {
                    imageClick(7);
                  }}
                ></img>
                <img
                  src={SP8}
                  alt="small-frame"
                  className={
                    selectedImage === 8 ? "small-frame-selected" : "small-frame"
                  }
                  onClick={() => {
                    imageClick(8);
                  }}
                ></img>
              </div>
            </div>
          </div>
          <footer className="next-button">
            <img
              className="active"
              src={nextButtonActive}
              alt="next-button"
              onClick={next7}
            />
          </footer>
        </div>
      ) : num == 8 ? (
        <div>
          <TitleMessage message={"이렇게 완성할까요?"} />
          <div className="make">
            <img
              src={createdImage}
              alt="created-image"
              className="created-image  "
            ></img>
            <CardBack
              name={name}
              introduction={introduction}
              birthday={birthday}
              location={location}
              major={major}
              keyword1={selectedKeywordBox[0]}
              keyword2={selectedKeywordBox[1]}
              keyword3={selectedKeywordBox[2]}
              keyword4={selectedKeywordBox[3]}
            />
          </div>
          <footer>
            <img
              className="last-check"
              src={LastCheck}
              alt="next-button"
              onClick={lastCheck}
            />
          </footer>
        </div>
      ) : null}
    </div>
  );
}

export default CreateCardPage;
