import { useState } from "react";

function TextForm(props) {
  let [text, setText] = useState("Enter Text Here...");

  let handleOnClick = () => {
    console.log("Onclick was clicked");
    // text = "You Clcick on textarea";
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Case", "success");
  };

  let handleOnClick1 = () => {
    console.log("Onclick was clicked");
    // text = "You Clcick on textarea";
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower Case", "success");
  };

  let handleOnChange = (e) => {
    console.log("OnChange");
    // console.log(e.target);
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>

          <button className="btn btn-primary my-2" onClick={handleOnClick}>
            Convert To UpperCase
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleOnClick1}
          >
            Convert To LowerCase
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something in above textbox"}</p>
      </div>
    </>
  );
}
export default TextForm;
