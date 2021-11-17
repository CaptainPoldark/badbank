import React, {useContext} from 'react';
import { Alert } from 'react-bootstrap';

import UserProvider, { UserContext } from "./UserContext";

// Components
import Card from './components/Card';

//Image
import BankImage from './images/bank.png';

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      {user.firstName ? (<div><Alert variant="dark" >Hello, {user.firstName}</Alert></div>):""}
    <Card
      bgcolor="dark"
      header="BadBank Landing Page"
      title="Welcome to the bank!"
      text="You can use this bank, but you probably shouldn't. You'll need to log in before you can see the rest of your navigation menu."
      body={<img src={BankImage} className="img-fluid" alt="bank logo" />}
    />
    </div>
  );
};

export default Home;