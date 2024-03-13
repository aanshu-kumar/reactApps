// let date = require(date);
function Clock() {
  let Newdate = new Date();
  return (
    <p className="font-monospace">
      This is the Current time: {Newdate.toLocaleDateString()} -{" "}
      {Newdate.toLocaleTimeString()}
    </p>
  );
}

export default Clock;
