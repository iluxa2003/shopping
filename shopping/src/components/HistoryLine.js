import styles from "./HistoryLine.module.css";
const HistoryLine = (props) => {
  const balance = 0;
  const balanceOut = 0;
  const amount = 0;
  const priceForItem = 0;
  return (
    <div
      className={styles.history_line}
      style={{
        border: "2px solid " + props.color,
        color: props.color,
      }}
    >
      <div>Balance in: {balance}$</div>
      <div>
        {props.buy
          ? "Purchase for "
          : "Selling for: " + priceForItem * amount + "$"}
      </div>
      <div>Ballance out {balanceOut}$</div>
    </div>
  );
};
export default HistoryLine;
