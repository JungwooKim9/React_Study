import {useState} from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {

  // 전역 변수 선언
  // let name="world";    // 문자열
  // let name = true;     // boolean
  // let name = 1;        // number(정수)
  // let name = 10.11;    // number(실수)
  // let name = {age : 10, addr : '서울'}
  let name = ['서울', 10, true, 10.1];

  let onClickEvent = function() {
      console.log("버튼이 클릭 되었습니다.");
  }

  /*
  function onClickEvent() {
    console.log("버튼이 클릭 되었습니다.");
  }

  let onClickEvent = () => {
    console.log("버튼이 클릭 되었습니다.");
  }
  */

  return (
    // JSX의 문법 규칙
      // 리턴문 내의 하나의 html로 리턴되어야 한다.
      // 리턴에서 감싸는 태그를 출력하지 않을 경우: <> </>
      // HTML은 소문자 적용, 반드시 닫는 태그가 존재해야 한다. <input>, <img>
      // HTML에서는 class 속성으로 클래스 이름을 지정함
      // JSX에서는 class 이름이 예약어로 지정되어 있음. className
      // HTML 블락 내에서 JavaScript 변수의 값을 불러올 때 { } 를 사용함.
      // 변수의 값을 출력시, boolean, number, string, null, undefine는 직접 변수명으로 처리
      // 객체나 배열인 경우는 객체나 배열의 속성값을 출력해야 한다.
      // HTML에서는 onclick, JSX에서는 onClick으로 처리. (C가 대문자)

    // <div className="App">
    <>
      <Header />

      <input />
      <img />
      <h1> Hello, {name[3]} </h1>
      <p> This is a paragraph. </p>
      <button onClick = {onClickEvent}> click me </button>

      <Footer />
    </>
    // </div>
  );
}

export default App;
