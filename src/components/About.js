//Please check!! Accordion is not working

import { useState } from "react";

function About() {
  let [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "black",
  });
  let [btnText, setBtnText] = useState("Enable Light Mode");

  let toggleStyle = () => {
    if (myStyle.color === "black") {
      myStyle = {
        color: "white",
        backgroundColor: "black",
      };
      setMyStyle(myStyle);

      btnText = "Enable Dark Mode";
      setBtnText(btnText);
    } else {
      myStyle = {
        color: "black",
        backgroundColor: "white",
      };
      setMyStyle(myStyle);

      btnText = "Enable Light Mode";
      setBtnText(btnText);
    }
  };
  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="text-center">About Us</h1>
        <div className="accordion p-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary my-2"
        onClick={toggleStyle}
      >
        {btnText}
      </button>
    </>
  );
}
export default About;
