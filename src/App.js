import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //Dark mode & Light mode through button
  //Here we use toggleMode as a 'Props'
  let [mode, setMode] = useState("light");
  let [btn, setBtn] = useState("Change to Dark Mode");

  let removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
  };
  let toggleMode = (p2) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + p2);
    if (mode === "light") {
      mode = "dark";
      setMode(mode);
      setBtn("Change to Light Mode");
      document.body.style.background = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      mode = "light";
      setMode(mode);
      setBtn("Change to Dark Mode");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  let [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    alert = {
      msg: message,
      type: type,
    };
    setAlert(alert);
    //Remove 'ALERT' automatically
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" newNumber={3} /> */}

      {/* This is for "Default Prop-Types" */}
      {/* <Navbar /> */}

      {/* This is for "isRequired" */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btn={btn} /> */}
      {/* <Alert alert="This is alert" /> */}
      {/* <Alert alert={alert} /> */}

      {/* <TextForm heading="Registration Form" mode={mode} showAlert={showAlert} /> */}

      {/* =========================== */}

      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          btn={btn}
        />
        <Alert alert={alert} />
        <Routes>
          {/* //Old Idea */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm
              heading="Registration Form"
              mode={mode}
              showAlert={showAlert}
            />
          </Route> */}

          {/* //New Idea */}
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Registration Form"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </Router>
      {/* =========================== */}

      {/* <About /> */}
    </>
  );
}
export default App;
