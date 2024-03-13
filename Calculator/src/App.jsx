import { useState } from "react";
import styles from "./App.module.css";
import AppButtons from "./Components/AppButtons";
import AppDisplay from "./Components/AppDisplay";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <AppDisplay displayValue={calVal}></AppDisplay>
      <AppButtons onButtonClick={onButtonClick}></AppButtons>
    </div>
  );
}

export default App;
