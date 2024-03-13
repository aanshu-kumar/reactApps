/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import ToDoitem from "./ToDoitem";

function Todomaps({ TodoItems }) {
  return (
    <>
      {TodoItems.map((items) => (
        <ToDoitem Todoname={items.name} Tododate={items.Duedate}></ToDoitem>
      ))}
    </>
  );
}

export default Todomaps;
