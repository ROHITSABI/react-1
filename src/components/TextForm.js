//State
import { useState } from "react";

function TextForm(props) {
  let [text, setText] = useState("Enter An Email");

  let handleOnClick = () => {
    console.log("Onclick was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  let handleOnChange = (e) => {
    text = e.target.value;
    setText(text);
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
          onChange={handleOnChange}
        />
        <button className="btn btn-primary mt-2" onClick={handleOnClick}>
          Convert to UpperCase
        </button>
      </div>
    </div>
  );
}
export default TextForm;
