import React, { useEffect, useState, useContext } from "react";
import UserProvider, { UserContext } from "../UserContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  const [show, setShow] = useState(true);
  console.log(`User Token: ${user.token}`);

  //const [show, setShow] = React.useState(checkToken);
  useEffect(() => {
    setShow(user.token == "test123");
    console.log(show);
    console.log(user.token);
  });
  console.log("Show Nav: " + (show ? true : false));

  const handleLogOut = () => {
    let thisUser = user;
    thisUser.token = null;
    setUser(false);
  };

  return (
    <Navbar classname="nav-bar-container" expand="sm" variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <FaHome className="home-icon" />
          </Link>
        </Navbar.Brand>

        {show ? (
          ""
        ) : (
          <div>
            <ul className="nav justify-content-center">
              <NavLink to="/">
                <li
                  className={(isActive) =>
                    !isActive ? "nav-item unselected" : "nav-item active"
                  }
                >
                  <p
                    className="nav-link hvr-ripple-out"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Click here to go to the Home Page"
                  >
                    Home
                  </p>
                </li>
              </NavLink>
              <NavLink to="/CreateAccount">
                <li
                  className={(isActive) =>
                    !isActive ? "nav-item unselected" : "nav-item active"
                  }
                >
                  <p
                    className="nav-link hvr-ripple-out"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Click here to create a new account"
                  >
                    Create Account
                  </p>
                </li>
              </NavLink>
              <NavLink to="/login">
                <li
                  className={(isActive) =>
                    !isActive ? "nav-item unselected" : "nav-item active"
                  }
                >
                  <p
                    className="nav-link hvr-ripple-out"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Click here to login to your account"
                  >
                    Login
                  </p>
                </li>
              </NavLink>
            </ul>
          </div>
        )}
        {show ? (
          <div>
            <ul className="nav justify-content-center">
              <NavLink to="/">
                <li
                  className={(isActive) =>
                    !isActive ? "nav-item unselected" : "nav-item active"
                  }
                >
                  <p
                    className="nav-link hvr-ripple-out"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Click here to go to the Home Page"
                  >
                    Home
                  </p>
                </li>
              </NavLink>

              <NavLink to="/deposit">
                <li
                  className={(isActive) =>
                    !isActive ? "nav-item unselected" : "nav-item active"
                  }
                >
                  <p
                    className="nav-link hvr-ripple-out"
                    activeClassName="nav-link hvr-ripple-out active"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Click here to start depositng some honey"
                  >
                    Deposit
                  </p>
                </li>
              </NavLink>
              <NavLink to="/withdraw">
                <li className="nav-item">
                  <p
                    className="nav-link hvr-ripple-out"
                    activeClassName="nav-link hvr-ripple-out active"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Click here if you need to get your hard cash out"
                  >
                    Withdraw
                  </p>
                </li>
              </NavLink>
              <NavLink to="/balance">
                <li className="nav-item">
                  <p
                    className="nav-link hvr-ripple-out"
                    activeClassName="nav-link hvr-ripple-out active"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Click here to see your banknote stash"
                  >
                    Balance
                  </p>
                </li>
              </NavLink>
              <NavLink to="/alldata">
                <li className="nav-item">
                  <p
                    className="nav-link hvr-ripple-out"
                    activeClassName="nav-link hvr-ripple-out active"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Click here to see information for all users"
                  >
                    AllData
                  </p>
                </li>
              </NavLink>
              <div>
                <Navbar.Text>
                  Signed in as: {user.firstName} {user.lastName}
                  <br />
                  <NavLink to="/">
                    <Button variant="dark" size="sm" onClick={handleLogOut}>
                      Log Out
                    </Button>
                  </NavLink>
                </Navbar.Text>
              </div>
            </ul>
          </div>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
