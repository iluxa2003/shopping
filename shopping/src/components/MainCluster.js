import BudjetHolder from "./BudjetHolder";
import FormWrap from "./FormWrap";
import classes from "./MainCluster.module.css";
const MainCluster = () => {
  return (
    <div className={classes.main_cluster}>
      <BudjetHolder>12345</BudjetHolder>
      <div className={classes.main_cluster__forms}>
        <FormWrap buttonText="123">somthing</FormWrap>
        <FormWrap buttonText="123">somthing</FormWrap>
      </div>
    </div>
  );
};
export default MainCluster;
