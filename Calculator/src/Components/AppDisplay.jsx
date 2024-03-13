import styles from "./AppDisplay.module.css";
// eslint-disable-next-line react/prop-types
const AppDisplay = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        className={styles.display}
        value={displayValue}
        readOnly
      ></input>
    </>
  );
};
export default AppDisplay;
