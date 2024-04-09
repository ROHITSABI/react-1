//To calculate the word length and words
import { useState } from "react";

function TextForm(props) {
  let [text, setText] = useState("Enter An Email");

  let handleOnClick = () => {
    console.log("Onclick was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  let handleOnClick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  let handleOnChange = (e) => {
    text = e.target.value;
    setText(text);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Email address
          </label>
          <textarea
            cols="40"
            rows="5"
            value={text}
            onChange={handleOnChange}
          ></textarea>

          <button className="btn btn-primary mt-2" onClick={handleOnClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mt-2" onClick={handleOnClick2}>
            Convert to LowerCase
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words & {text.length} characters <br />
          {0.008 * text.split(" ").length} Minutes
        </p>
        <h2>Preview</h2>
        {text}
      </div>
      <div className="container"></div>
    </>
  );
}
export default TextForm;
