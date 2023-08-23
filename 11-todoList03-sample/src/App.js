import UseReducer from "./component/UseReducer";
import UseState from "./component/UseState";

function App() {
  return (
    <div>
      <h1> useState 사용 </h1>
      <hr />
      <UseState />
      <br /> <br /> <br /> <br /> <br />
      <hr />
      <hr />
      <h1> useReducer 사용 </h1>
      <hr />
      <UseReducer />
    </div>
  );
}

export default App;
