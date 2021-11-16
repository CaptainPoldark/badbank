import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "./Card";

import { AllUsersContext } from "../UsersContext";

const AllData = () => {
  const [updateList, setUpdateList] = useContext(AllUsersContext);
  //console.log(JSON.stringify(users));

  console.log(updateList);
  //const [userList, setUserList] = React.useState(users);
  //console.log(userList);

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item" key="title">
        Showing information for all users from UsersContext
      </li>
      <br />
      <Container>
        <Row>
          {updateList.map((user, i) => (
            <Card
              bgcolor="dark"
              header={
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
              }
              title={`Current Balance $${user.balance}`}
              text={
                <p>
                  Email: {user.email} <br />
                  Password: {user.password}{" "}<br/>
                  Currently logged in: {user.token ? "Yes": "No"}
                </p>
              }
              body={user.transactions.map((trans, i) => (
                <li className="list-group-item" index={i}>
                  {trans}
                </li>
              ))}
            />
          ))}
        </Row>
      </Container>
    </ul>
  );
};

export default AllData;
