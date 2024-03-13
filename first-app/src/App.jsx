import AppName from "./Components/AppName";
import AppTodo from "./Components/AddTodo";
import "./App.css";
import Todomaps from "./Components/Todomaps";
function App() {
  const TodoItems = [
    {
      name: "Buy Milk",
      Duedate: "10/12/2023",
    },
    {
      name: "GO TO College",
      Duedate: "11/12/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="items-container">
        <AppTodo></AppTodo>
        <Todomaps TodoItems={TodoItems}></Todomaps>
      </div>
    </center>
  );
}
export default App;
