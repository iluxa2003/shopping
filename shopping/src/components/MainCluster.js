import BudjetHolder from "./BudjetHolder";
import FormWrap from "./FormWrap";
import classes from "./MainCluster.module.css";
import Input from "../UI/Input";
import { useState } from "react";
const MainCluster = () => {
  const [budj, setBudj] = useState(0);
  const [sellOne, setSellOne] = useState(0);
  const [buyOne, setBuyOne] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const inputHandler = (func) => {
    const handler = (event) => {
      func(event.target.value);
    };
    return handler;
  };
  const buyHandler = (event) => {
    event.preventDefault();
    setBudj((budjet) => {
      return budjet - buyOne * buyAmount;
    });
    setBuyOne(0);
    setBuyAmount(0);
  };
  const sellHandler = (event) => {
    event.preventDefault();
    setBudj((budjet) => {
      return budjet + sellOne * sellAmount;
    });
    setSellOne(0);
    setSellAmount(0);
  };
  return (
    <div className={classes.main_cluster}>
      <BudjetHolder>{parseFloat(budj).toFixed(2)}</BudjetHolder>
      <div className={classes.main_cluster__forms}>
        <FormWrap buttonText="Buy" title="Buy stuff" submit={buyHandler}>
          <Input
            type="number"
            name="The price for one"
            value={buyOne}
            onInput={inputHandler(setBuyOne)}
          />
          <Input
            type="number"
            name="Amount"
            value={buyAmount}
            onInput={inputHandler(setBuyAmount)}
          />
        </FormWrap>
        <FormWrap buttonText="Sell" title="Sell stuff" submit={sellHandler}>
          <Input
            type="number"
            name="The price for one"
            value={sellOne}
            onInput={inputHandler(setSellOne)}
          />
          <Input
            type="number"
            name="Amount"
            value={sellAmount}
            onInput={inputHandler(setSellAmount)}
          />
        </FormWrap>
      </div>
    </div>
  );
};
export default MainCluster;
