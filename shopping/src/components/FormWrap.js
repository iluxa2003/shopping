import Button from "../UI/Button";
import styles from "./FormWrap.module.css";
const FormWrap = (props) => {
  return (
    <form className={styles.form_wrap} onSubmit={props.submit}>
      {props.children}
      <Button color="green" type="submit">
        {props.buttonText}
      </Button>
    </form>
  );
};
export default FormWrap;
