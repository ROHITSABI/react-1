import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  // let name = "Rohit";

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" newNumber={3} />

      {/* This is for "Default Prop-Types" */}
      {/* <Navbar /> */}

      {/* This is for "isRequired" */}
      {/* <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} /> */}

      {/* <TextForm heading="Registration Form" mode={mode} /> */}

      <About />
    </>
  );
}
export default App;
