import React, { useState, useContext } from "react";

//styling
import "./App.css";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Home from "./Home";

import NavBar from "./components/Navbar";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Balance from "./components/Balance";
import AllData from "./components/AllData";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";

//Context

import AllUsers from "./UsersContext";
import UserProvider from "./UserContext";

const App = () => {
  return (
    <Router>
      <AllUsers>
        <UserProvider>

              <NavBar />
              <br />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/CreateAccount" element={<CreateAccount />} />

                <Route path="/Balance" element={<Balance />} />
                <Route path="/AllData" element={<AllData />} />
                <Route path="/Deposit" element={<Deposit />} />
                <Route path="/Withdraw" element={<Withdraw />} />
              </Routes>

        </UserProvider>
      </AllUsers>
    </Router>
  );
};

export default App;
