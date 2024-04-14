import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  //Dark mode & Light mode through button
  //Here we use toggleMode as a 'Props'
  let [mode, setMode] = useState("dark");
  let [btn, setBtn] = useState("Change to Light Mode");
  let toggleMode = () => {
    if (mode === "dark") {
      mode = "light";
      setMode(mode);
      setBtn("Change to Dark Mode");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      mode = "dark";
      setMode(mode);
      setBtn("Change to Light Mode");
      document.body.style.background = "grey";
      showAlert("Dark mode has been enabled", "success");
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
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btn={btn} />
      {/* <Alert alert="This is alert" /> */}
      <Alert alert={alert} />

      <TextForm heading="Registration Form" mode={mode} showAlert={showAlert} />

      {/* <About /> */}
    </>
  );
}
export default App;
