import styles from "./HistoryCluster.module.css";
import HistoryLine from "./HistoryLine";
const HistoryCluster = () => {
  return (
    <section className={styles.history_cluster}>
      <h1>There were no history yet</h1>
      <HistoryLine color={"green"} />
    </section>
  );
};
export default HistoryCluster;
