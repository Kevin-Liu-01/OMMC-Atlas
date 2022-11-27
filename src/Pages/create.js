import React, { useState, useCallback } from "react";
// This will require to npm install axios
import axios from "axios";
import Constants from "./config.js";
import debounce from "lodash.debounce";

const Create = (props) => {
  const [stateObj = {}, _objSet] = useState({
    question_name: "",
    question_position: "",
    question_level: "",
    question_topic: "",
    question_comp: "",
  });
  const myStateRef = React.useRef(stateObj);

  const objSet = (data) => {
    myStateRef.current = data;
    _objSet(data);
  };

  console.log("The initial state is " + JSON.stringify(stateObj));

  // These methods will update the state properties.
  function onChangePersonName(e) {
    console.log(" prev state: " + JSON.stringify(myStateRef.current));
    objSet({ ...myStateRef.current, question_name: e.target.value });
  }

  function onChangePersonPosition(e) {
    objSet({ ...myStateRef.current, question_position: e.target.value });
  }

  function onChangePersonLevel(e) {
    objSet({ ...myStateRef.current, question_level: e.target.value });
  }

  function onChangePersonTopic(e) {
    objSet({ ...myStateRef.current, question_topic: e.target.value });
  }

  function onChangeQuestionComp(e) {
    objSet({ ...myStateRef.current, question_comp: e.target.value });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      question_name: stateObj.question_name,
      question_position: stateObj.question_position,
      question_level: stateObj.question_level,
      question_topic: stateObj.question_topic,
      question_comp: stateObj.question_comp,
    };

    axios.post(`${Constants.SERVER_HOST}/record/add`, newperson).then((res) => {
      console.log(res.data);
    });

    console.log("Timer begin");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    props.history.push("/");

    console.log("new person has been crated");

    // We will empty the state after posting the data to the database
    objSet({
      question_name: "",
      question_position: "",
      question_level: "",
      question_topic: "",
    });
  }

  const debouncedChangeHandler = useCallback(
    () => debounce(() => onSubmit, 1000),
    []
  );

  // This following section will display the form that takes the input from the user.
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Create New Question</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Content of Question: </label>
          <input
            type="text"
            className="form-control"
            value={stateObj.question_name}
            onChange={onChangePersonName}
          />
        </div>
        <div className="form-group">
          <label>Solution to Question: </label>
          <input
            type="text"
            className="form-control"
            value={stateObj.question_position}
            onChange={onChangePersonPosition}
          />
        </div>
        <div className="form-group">
          <label>Topic of Question: </label>
          <input
            type="text"
            className="form-control"
            value={stateObj.question_topic}
            onChange={onChangePersonTopic}
          />
        </div>
        <div className="form-group">
          <label>Year: </label>
          <input
            type="text"
            className="form-control"
            value={stateObj.question_comp}
            onChange={onChangeQuestionComp}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Elementary"
              checked={stateObj.question_level === "Elementary"}
              onChange={onChangePersonLevel}
            />
            <label className="form-check-label">Elementary</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Intermediate"
              checked={stateObj.question_level === "Intermediate"}
              onChange={onChangePersonLevel}
            />
            <label className="form-check-label">Intermediate</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="Advanced"
              checked={stateObj.question_level === "Advanced"}
              onChange={onChangePersonLevel}
            />
            <label className="form-check-label">Advanced</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
