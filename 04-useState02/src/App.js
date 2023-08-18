import { useState } from 'react';
import './App.css';

function App() {
  let name = "World!";
  const [number, setNumber] = useState(0);
  // className 속성에 사용 될 state 변수 선언 
  const [numColor, setNumColor] = useState("numColor1");

  let clickEventHandler = () => {
    let num  = Math.random() * 100;
    num = Math.floor(num);
    // 클래스 초기값
    setNumColor("numColor1");
    if(Math.floor(Math.random() * 2)) {
      num = -num;
      // 버튼을 클릭 했을 때 발생 된 난수가 음수일경우 클래스 값 변경
      setNumColor("numColor0");
    }
    setNumber(num);
    console.log("number : " + number);
  }

  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <p className={numColor}>Number : {number}</p>
      <button onClick={clickEventHandler}>Click me!</button>
    </div>
  );
}

export default App;