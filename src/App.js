import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  //Dark mode & Light mode through button
  //Here we use toggleMode as a 'Props'
  let [mode, setMode] = useState("dark");
  let toggleMode = () => {
    if (mode === "dark") {
      mode = "light";
      setMode(mode);
    } else {
      mode = "dark";
      setMode(mode);
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" newNumber={3} /> */}

      {/* This is for "Default Prop-Types" */}
      {/* <Navbar /> */}

      {/* This is for "isRequired" */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {/* <TextForm heading="Registration Form" mode={mode} /> */}

      {/* <About /> */}
    </>
  );
}
export default App;
