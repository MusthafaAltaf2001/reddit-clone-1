import "./App.css";
import Header from "./Header/Header";
import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./Homepage";
import Login from "./Login/Login";
import { HandleUserInfo } from "./Actions/HandleUserInfo";

function App() {
  // const [buttonPopUp, setButtonPopUp] = useState(false)
  const dispatch = useDispatch();

  const popUpButtonState = useSelector((state) => state.PopUpButtonState);
  // dispatch(HandleUserInfo());

  // useEffect(() => {
  //   dispatch(HandleUserInfo());
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header props={popUpButtonState}></Header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Homepage />} />
        </Routes>
        <Login sx={{ color: "white" }} trigger={popUpButtonState} />
      </div>
    </Router>
  );
}

export default App;
