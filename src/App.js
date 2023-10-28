import React, { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import ABout from "./Components/ABout";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  // document.body.style.backgroundColor='#005377'
  const [mode, setmode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#F58549";
      showAlert("Dark mode hasbeen enabled", "success");
      document.title = "TextUtils-Dark mode";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "white";

      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light mode";
    }
  };

  return (
    <>

     
<Navbar
        title="TextUtils"
        About="About"
        mode={mode}
        toggleMode={toggleMode}
        />
      <Alert alert={alert} />
      <div className="container">
{/* <Router> */}
      {/* <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>    */}
          {/* <Route exact path="/about" element={<ABout />} /> */}
          {/* <Route exact path="/" element={<Textform heading="Enter the text to analyze below" showAlert={showAlert}/>} /> */}
        {/* </Routes>
      </div>
   </Router> */}





<Textform heading="Enter the text to analyze below" showAlert={showAlert}/>



      </div>
    </>
  );
}

export default App;
