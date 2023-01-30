import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <label className={classes.label_wrap}>
      <div>{props.name}</div>
      <input className={classes.special_input} onInput={props.onInput} />
    </label>
  );
};
export default Input;
