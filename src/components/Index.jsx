import React from "react";
import TodoForm from "./TodoForm";
import logo from "../assets/image/pngwing.com.png"
import "../App.css"
// import {md5} from "./main.js"

function Index() {
//   const [state, setState] = useState([md5("PF!FAGTX")])

//   const handleClick = () => {
//     setState([])
//   }
//   console.log(state)
  return (
    <div className="formWidth">
      <div className="form-todo">
        <img src={logo} alt="" width={100} height={100}/>
      <h1 className="h1-heading">IT Admin - Password Generator</h1>
        <TodoForm />
      </div>
    </div>
  );
}

export default Index;
