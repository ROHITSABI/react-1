//PROPS

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // let name = "Rohit";

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" newNumber={3} /> */}

      {/* This is for "Default Prop-Types" */}
      {/* <Navbar /> */}

      {/* This is for "isRequired" */}
      <Navbar title="TextUtils" aboutText="About Us" newNumber={3} />
    </>
  );
}
export default App;
