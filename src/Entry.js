import React from "react";
import "./css/main.css";

function Entry(props) {
  let state = props.state;
  function delEntry() {
    console.log(state.weights[props.index]);
    state.weights.splice(props.index, 1);
    state.dates.splice(props.index, 1);
    console.log(state.weights[props.index]);
  }
  return (
    <div className="entry-box">
      <p>
        Weight: {props.weight}, Date: {props.date}
      </p>
      <button className="delete-btn" onClick={delEntry}>
        Delete Entry
      </button>
    </div>
  );
}

export default Entry;
