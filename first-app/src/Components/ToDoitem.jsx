// eslint-disable-next-line react/prop-types
function ToDoitem({ Todoname, Tododate }) {
  return (
    <div className="container">
      <div className="row app-row">
        <div className="col-6">{Todoname}</div>
        <div className="col-4">{Tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger app-button">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoitem;
