/* eslint-disable react/jsx-key */
import styles from "./AppButtons.module.css";
// eslint-disable-next-line react/prop-types
const AppButtons = ({ onButtonClick }) => {
  let btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {btn.map((btn) => (
        <button className={styles.buttons} onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};
export default AppButtons;
