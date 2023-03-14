import React, { useState } from "react";

import { BrowserView, MobileView, MoblieView } from "react-device-detect";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import imag from "./image/s-des.PNG";
import imag2 from "./image/demo.gif";
import { GoMarkGithub } from "react-icons/go";

function App() {
  let [글제목, 글제목변경] = useState([
    "HTML 사이트",
    "S-DES",
    "문성주",
  ]);
  let [좋아요1, 좋아요변경] = useState(0);

  let [좋아요2, 좋아요변경2] = useState(0);

  let style = { color: "white", fontSize: "30px" };

  function Ap1() {
    return (
      <div className="list">
        <h3>
          {" "}{글제목[0]}{" "}
          <span onClick={() => { 좋아요변경(좋아요1 + 1); }}>{" "}👍{" "}</span>
          {" "}{좋아요1}{" "}
        </h3>
        <img src={imag2} alt="imag2" className="main-logo2" /> 학부시절 JS,HTML,CSS로 만든 사이트
        <p>2월 17일 발행</p>
        <hr />
      </div>
    );
  }

  function Ap2() {
    return (
      <div className="list">
        <h3>
          {" "}
          {글제목[1]}{" "}
          <span
            onClick={() => {
              좋아요변경2(좋아요2 + 1);
            }}
          >
            {" "}
            👍{" "}
          </span>{" "}
          {좋아요2}{" "}
        </h3>
        <div className="list_class">
          <img src={imag} alt="imag" className="main-logo" /> 학부시절 JAVA GUI로 만든 S-DES
        </div>
        <p>2월 18일 발행</p>
        <hr />
      </div>
    );
  }

  function Ap3() {
    return (
      <div className="list">
        <h3>이름 : {글제목[2]} </h3>
        <h4>GitHub</h4>
        <GoMarkGithub/>
        <button onClick={()=>{window.open("https://github.com/tjdwn154")}}>깃허브가기</button>
        <button ></button>
        <h4>Skill</h4>
        <p>1. JavaScript</p>
        <p>2. HTML5</p>
        <p>3. CSS</p>
        <p>4. Node.js</p>
        <p>5. MongoDB</p>
        <p>6. React</p>
        <hr />
      </div>
    );
  }

  // function 제목바꾸기(){
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경(newArray);
  // }
  return (
    <div className="App">
      <BrowserView>
        <div className="black-nav">
          <div style={style}>개발 blog</div>
        </div>
        {/* <button onClick={ 제목바꾸기 }>버튼</button> */}

        <Ap1 />

        <Ap2 />

        <Ap3 />
        

        <Modal />
        
      </BrowserView>

      <MobileView>
        <div className="black-nav">
          <div style={style}>개발 blog</div>
        </div>
        {/* <button onClick={ 제목바꾸기 }>버튼</button> */}

        <Ap1 />

        <Ap2 />

        <Ap3 />

        <Modal />
      </MobileView>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>리액트</h2>
      <p>문성주</p>
    </div>
  );
}

export default App;
