import styles from "./LoadingSpinner.module.css";

interface Props {
  loading: boolean;
}

const LoadingSpinner: React.FC<Props> = ({ loading }) => {
  return loading ? (
    <div className={styles.container}>
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default LoadingSpinner;
