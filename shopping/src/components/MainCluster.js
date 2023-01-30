import BudjetHolder from "./BudjetHolder";
import FormWrap from "./FormWrap";
import classes from "./MainCluster.module.css";
import Input from "../UI/Input";
const MainCluster = () => {
  return (
    <div className={classes.main_cluster}>
      <BudjetHolder>12345</BudjetHolder>
      <div className={classes.main_cluster__forms}>
        <FormWrap buttonText="Submit">
          <Input name="The price for one" />
          <Input name="Amount" />
        </FormWrap>
        <FormWrap buttonText="Submit">
          <Input name="The price for one" />
          <Input name="Amount" />
        </FormWrap>
      </div>
    </div>
  );
};
export default MainCluster;
