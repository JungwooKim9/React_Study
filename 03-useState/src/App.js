import { useState } from "react";

// useState : 상태 (JSX에 적용될 데이터)
  // 값이 수정이 되면 자동으로 랜더링 해줌

function App() {

  let name = 'World';

  // 숫자를 저장하는 state 변수
  // state 값이 변경이 되면 컴포넌트는 자동으로 렌더링 된다.
  // 가상돔에 생성된 엘리멘트는 수정되지 않는다. 새로이 생성
  
  const [number, setNumber] = useState(0);
  const [numberStyle, setNumberStyle] = useState({color:"blue"});

  // 함수 생성하는 3가지 방법: ES6부터는 화살표 함수를 많이 사용함.
  /*
    1. 첫 번째 방법
      function clickEventHandler() {
        // 함수 호출시 실행 블락
      }

    2. 두 번째 방법
      let clickEventHandler = function() {
        // 함수 호출시 실행 블락
      }

    3. 세 번째 방법
      let clickEventHandler = () => {
        // 함수 호출시 실행 블락
      }
  */

      let clickEventHandler = () => {
        console.log("함수 호출 성공");

        // 랜덤한 값을 출력하는 함수
        // Math.random()은 0~1 사이의 랜덤한 값을 생성
        let num = Math.random()*100;
        // 반올림: Math.round()
        // 소수점 이하 절삭: Math.floor()
        num = Math.floor(num);
        console.log(num);

        // 양수이면 numberStyle 변수의 값을 파란색으로 처리,
        // setter를 사용해서 useState 변수의 값 변경
        setNumberStyle({color:"blue"});

        // 음수일 때
        // let num2 = Math.floor(Math.random()*2);
        // if 조건에서 1등록 되면 true, 0등록 되면 false
        if (Math.floor(Math.random()*2)) {
          num = -num;
          setNumberStyle({color:"red"});
          console.log(num);
        }

        // 클릭시 마다 상태를 업데이트 함 <= 렌더링이 자동으로 일어남
        setNumber(num);

      }


  // number 변수의 값이 양수이면 파란색으로 출력, 음수이면 빨간색으로 출력
  return (
    <div className="App">
      <h1>Hello, {name} </h1>
      <p style={numberStyle}> Number : {number} </p>
      <button onClick={clickEventHandler}> click me!! </button>
      
      <div style={{color:"red", padding:20}}> 스타일 적용 </div>
    </div>

  );
}

export default App;
