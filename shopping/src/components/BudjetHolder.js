import classes from "./BudjetHolder.module.css";
const BudjetHolder = (props) => {
  return <div className={classes.budjet_wrap}>{props.children}</div>;
};
export default BudjetHolder;
