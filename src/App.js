import './App.css';
import { useState } from 'react';

function App() {
  const [age,setAge] = useState(0);
  const [iText, setiText] = useState("");
  const [Buttontext, setButtontext] = useState("Hide");

  const increaseAge = () => {
    setAge(age+1);
  }
  const handleChange = (event) => {
    setiText(event.target.value);
  }
  const handleClick = () => {
    if(Buttontext === "Hide"){
      setButtontext("Show");
    }
    else{
      setButtontext("Hide");
    }
  }

  return (
    <div className="App">
      {age}
      <br></br>
      <button onClick={increaseAge}>Add one</button>
      <br></br>
      <input type="text" onChange={handleChange}></input>
      <br></br>
      You are writing: 
      {iText}
      <br></br>
      <br></br>
      <button onClick={handleClick}>{Buttontext}</button>
      {Buttontext === "Hide" && <div>This is secret information</div>}



    </div>
  );
}



export default App;
