import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("handleUpClick checked" + text)
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text is capitalized", "success");
  };
  const handleLoClick = () => {
    // console.log("handleUpClick checked" + text)
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text converted to Lower case", "success");
  };

  const handleClrClick = () => {
    let newtext = text;
    newtext = "";
    setText(newtext);
    props.showAlert("Text is cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopieClick = () => {
    let copytext = document.getElementById("TextInput");
    copytext.select();
    copytext.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copytext.value);
  };
  const [text, setText] = useState();
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="TextInput"
            rows="8"
          ></textarea>
        </div>

        <button onClick={handleUpClick} className="btn btn-primary mx-1">
          UpperCase
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-1">
          LowerCase
        </button>
        <button onClick={handleClrClick} className="btn btn-primary mx-1">
          ClearText
        </button>
        <button onClick={handleCopieClick} className="btn btn-primary mx-1">
          CopyText
        </button>
      </div>

      <div className="container my-3">
        <h1>Text counter</h1>
        <p>
          {text && text.split(" ").filter(Boolean).length} words and {text && text.length} characters.
        </p>
        <p>Time to read is {text ? 0.008 * text.split(" ").filter(Boolean).length : 0}</p>


        {/* <p>`{ text.split(/\s+/).filter(word => word.trim() !== "")}`</p> */}
      </div>
    </>
  );
}
