import "./App.css";
import reactLogo from "../public/react.svg?inline";
import rsPackLogo from "../public/rspack.png";
import { calculateData } from "./utils/test";
import { useState } from "react";
import styles from "./App.module.css"; // -->> ở đây
import FormTest from "./module/form";

const App = () => {
  const a = localStorage.getItem('login');
  const [state,setState] = useState(0)
  console.log(a,'cc')
  const handelClick = ()=>{
   const resuult = calculateData(1)
   setState(resuult)
  }
  return (
    <>
    <FormTest/>
    </>
  );
};

export default App;
