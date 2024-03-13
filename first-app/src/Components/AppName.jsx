import styles from "./AppName.module.css";
function AppName() {
  let appname = "TODO App";

  return <h1 className={styles.todoHeading}> {appname} </h1>;
}
export default AppName;
