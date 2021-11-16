import React, { useContext, useState } from "react";
import Card from "./Card";
import UserProvider, { UserContext } from "../UserContext";

const Balance = () => {
  const [user, setUser] = useContext(UserContext);
  let balance = user.balance;
  let transactions = user.transactions;
  const [prevTransactions, setPrevTransactions] = useState(transactions);
  const [totalState, setTotalState] = useState(balance);
  return (
    <Card
      bgcolor="dark"
      header="BadBank Balance"
      title="Snapshot of your balance"
      text={
        (transactions.length == 0)
          ? "No transactions yet"
          : (transactions.lenth > 1)
          ? `Last ${transactions[0]}`
          : "Initial Deposit"
      }
      body={"$" + totalState}
    />
  );
};

export default Balance;
