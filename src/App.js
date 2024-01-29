import logo from "./logo.svg";
import "./App.css";

function App() {
  const num = 11;

  if (num > 10) {
    return <h1>{`${num} is greater than 10`}</h1>;
  } else if(num === 10){
    return <h1>{`${num} is equal`}</h1>;
  } else{
    return <h1>{`${num} is less than 10`}</h1>;
  }
}

export default App;
