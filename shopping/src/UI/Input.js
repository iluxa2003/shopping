const Input = (props) => {
  return (
    <label className="">
      {props.name}
      <input className="" onInput={props.onInput} />
    </label>
  );
};
