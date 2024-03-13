import { useEffect, useState } from "react";
import Style from "./App.module.css";

function App() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  // Function to update the time state variables
  const updateTime = () => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours().toString().padStart(2, "0");
    const currentMinutes = currentTime.getMinutes().toString().padStart(2, "0");
    const currentSeconds = currentTime.getSeconds().toString().padStart(2, "0");
    setHours(currentHours);
    setMinutes(currentMinutes);
    setSeconds(currentSeconds);
  };

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <center className={Style.heading}>
        <h3>Here is a clock</h3>
      </center>
      <div className={Style.clock}>
        <p>
          {hours}:{minutes}:{seconds}
        </p>
      </div>
    </>
  );
}

export default App;
