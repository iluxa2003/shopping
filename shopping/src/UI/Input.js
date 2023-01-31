import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <label className={classes.label_wrap}>
      <div>{props.name}</div>
      <input
        type={props.type}
        className={classes.special_input}
        value={props.value}
        onInput={props.onInput}
      />
    </label>
  );
};
export default Input;
