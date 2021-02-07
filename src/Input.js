import React, { useState } from "react";
import Chart from "./Chart";
import "./css/main.css";
import Entry from "./Entry";
import axios from "axios";

function Input() {
  const [state, setState] = useState({
    weight: null,
    weights: [],
    dates: [],
    fakeDate: {
      month: 1,
      day: 0,
      year: 2021,
    },
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      [name]: value,
      weights: state.weights,
      dates: state.dates,
      fakeDate: state.fakeDate,
    });
    // console.log(state);
  }

  function getRndInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  }

  function getRndDate() {
    let month = getRndInteger(1, 12);
    let day = getRndInteger(1, 30);
    let rndDate = month + "/" + day + "/2021";
    return rndDate;
  }

  function getFakeDate() {
    console.log("day", state.fakeDate.day);
    // setState({
    //   weight: state.weight,
    //   weights: state.weights,
    //   dates: state.dates,
    //   fakeDate: {
    //     month: 1,
    //     day: 2,
    //     year: 3,
    //   },
    // });
    state.fakeDate.day += 1;
    if (state.fakeDate.day > 30) {
      state.fakeDate.day = 1;
      state.fakeDate.month += 1;
    }
    if (state.fakeDate.month > 12) {
      state.fakeDate.month = 1;
      state.fakeDate.year += 1;
    }
    let genedDate =
      state.fakeDate.month +
      "/" +
      state.fakeDate.day +
      "/" +
      state.fakeDate.year;
    console.log(genedDate);
    return genedDate;
  }

  function getFakeData(event) {
    event.preventDefault();
    for (var i = 0; i < 10; i++) {
      let newWeights = state.weights;
      let newDates = state.dates;
      newWeights.push(getRndInteger(160, 170));
      newDates.push(getFakeDate());
      setState({
        weight: state.weight,
        weights: newWeights,
        dates: newDates,
        fakeDate: state.fakeDate,
      });
    }
  }

  function pushToWeights(event) {
    event.preventDefault();
    let newWeights = state.weights;
    newWeights.push(state.weight);
    let newDates = state.dates;
    let date = new Date();
    newDates.push(
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
    );

    setState({
      weight: state.weight,
      weights: newWeights,
      dates: newDates,
      fakeDate: state.fakeDate,
    });

    state.weight = null;
  }
  let i = 0;
  return (
    <div className="input-Chart">
      <div>
        <form>
          <input
            type="text"
            name="weight"
            value={state.weight}
            placeholder="Weight in lbs"
            onChange={handleChange}
          ></input>
          <br />
          <button onClick={pushToWeights}>add</button>
          <button onClick={getFakeData}>fake data</button>
        </form>
      </div>
      <Chart data={state} />
      <div className="weights-box">
        {state.weights.map((weight, i) => (
          <Entry
            weight={weight}
            date={state.dates[i]}
            index={i}
            state={state}
          />
        ))}
      </div>
    </div>
  );
}

export default Input;
