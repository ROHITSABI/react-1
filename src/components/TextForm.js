import { useState } from "react";

function TextForm(props) {
  let [text, setText] = useState("Enter an Email");

  let handleOnChange = (e) => {
    text = e.target.value;
    setText(text);
  };

  let handleUpClick = () => {
    console.log("Handle was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="myBox"
          value={text}
          placeholder={text}
          onChange={handleOnChange}
        />
        <button className="btn btn-primary mt-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
      </div>
    </div>
  );
}
export default TextForm;
