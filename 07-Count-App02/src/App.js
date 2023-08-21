import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import {useRef, useState} from 'react';
import './App.css'
import Event from "./component/Event";

function App() {

  // useState: 상태 (값) 변경 되면 랜더링, 상태 값은 부모에서 자식으로 전달할 수 있음
      // 형제 레벨의 컴포넌트로는 직접 전달이 안된다.
      // 자식에서 부모로 전달도 안된다.
  // Viewer 컴포넌트에 전달할 상태 값
  const [count, setCount] = useState(0);

  // 함수 호출: 자식 ==> 부모로 호출
  const handleSetCount = (value) => {
      setCount(count + value);
  }

  // useRef를 사용해서 컴포넌트가 생성될 때 작동 되지 않도록 설정
  const didMountRef = useRef(false);

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <section>
      <Viewer count={count} />
      {count % 2 === 0 && <Event />}
      </section>

      <section>
      <Controller handleSetCount = {handleSetCount} />
      </section>
    </div>
  );
}

export default App;
