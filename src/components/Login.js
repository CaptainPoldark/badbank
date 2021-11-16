import React, { useState, useContext } from "react";
import Card from "./Card";
import "./Login.css";
import { AllUsersContext } from "../UsersContext";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import UserProvider, { UserContext } from "../UserContext";

export default function Login({ token, setToken }) {
  const [updateList, setUpdateList] = React.useContext(AllUsersContext);
  const [currentUser, setCurrentUser] = React.useContext(UserContext);
  const [username, setEmail] = useState();
  const [password, setPassword] = useState();

  let show = currentUser.token == null;
  console.log(show);
  console.log(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = loginUser({
      username,
      password,
      updateList,
    });
    console.log(token);

    console.log(currentUser);
    show = currentUser.token == null;
  };

  const loginUser = () => {
    const userFound = updateList.find(function (userArray) {
      return userArray.email == username;
    });

    if (!userFound) {
      return null;
    }

    const checkPassword = () => {
      if (userFound.password == password) {
        console.log("login success");
        return "Success";
      } else {
        console.log("Failed login");
        return "Failed";
      }
    };

    const verify = checkPassword({
      userFound,
      password,
    });

    if (verify == "Success") {
      console.log("return token");
      userFound.token = "test123";
      console.log(userFound);
      setCurrentUser(userFound);
      console.log(currentUser);
      return "test123";
    } else {
      console.log("return null");
      return null;
    }
  };

  return show ? (
    <Card
      bgcolor="dark"
      header="Please Log In"
      //status={status}
      body={
        <div className="login-wrapper">
          <form onSubmit={handleSubmit}>
            <label>
              <p>Email</p>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      }
    ></Card>
  ) : (
    <Card
      bgcolor="dark"
      header={<h3>You've successfully logged in!</h3>}
      //status={status}
      body={
        <div className="login-wrapper">
          <div>
            <NavLink to="/balance">
              <Button className="btn-primary" variant="primary">
                Check your balance
              </Button>
            </NavLink>
          </div>
        </div>
      }
    ></Card>
  );
}
