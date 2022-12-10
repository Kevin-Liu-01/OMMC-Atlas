import React, { useEffect, useState } from "react";
// This will require to npm install axios
import axios from "axios";
import Constants from "../config.js";

const Edit = (props) => {
  // This is the constructor that stores the data.
  console.log("The constructor in edit is called");
  const [question_name, setName] = useState("");
  const [question_position, setPosition] = useState("");
  const [question_level, setLevel] = useState("");
  const [question_topic, setTopic] = useState("");
  const [question_comp, setComp] = useState("");

  // This will get the record based on the id from the database.
  useEffect(() => {
    console.log("USEEFFECT CALLED");
    axios
      .get(`${Constants.SERVER_HOST}/question/${props.match.params.id}`)
      .then(
        (response) => (
          console.log(
            `${Constants.SERVER_HOST}/question/${props.match.params.id}`
          ),
          setName(response.data.question_name),
          setPosition(response.data.question_position),
          setLevel(response.data.question_level),
          setTopic(response.data.question_topic),
          setComp(response.data.question_comp)
        )
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // These methods will update the state properties.
  function onChangeQuestionName(eb) {
    console.log(eb.target.value);
    // if (eb.target.value.length < 13) {
    setName(eb.target.value);
    // }

    // if (eb.target.value.length === 12) {
    //   console.log("you cannot add anymore")
    // }
  }

  function onChangePersonPosition(e) {
    setPosition(e.target.value);
  }

  function onChangeQuestionLevel(e) {
    setLevel(e.target.value);
  }
  function onChangeTopic(e) {
    setTopic(e.target.value);
  }
  function onChangeComp(e) {
    setComp(e.target.value);
  }

  // This function will handle the submission.
  function onSubmit(e) {
    e.preventDefault();
    const newEditedQuestion = {
      question_name: question_name,
      question_position: question_position,
      question_level: question_level,
      question_topic: question_topic,
      question_comp: question_comp,
    };
    console.log(newEditedQuestion);

    // This will send a post request to update the data in the database.
    axios
      .post(
        `${Constants.SERVER_HOST}/update/${props.match.params.id}`,
        newEditedQuestion
      )
      .then((res) => {
        console.log(res.data);
        props.history.push("/");
      });
  }

  // This following section will display the update-form that takes the input from the user to update the data.
  console.log("COMPONENT RENDERED");

  return (
    <div>
      <h3 align="center">Update Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Question Content: </label>
          <input
            type="text"
            className="form-control"
            value={question_name}
            onChange={onChangeQuestionName}
          />
        </div>
        <div className="form-group">
          <label>Solution: </label>
          <input
            style={{ maxWidth: "", maxheight: "15rem" }}
            type="text"
            className="form-control"
            value={question_position}
            onChange={onChangePersonPosition}
          />
        </div>
        <div className="form-group">
          <label>Topic: </label>
          <input
            type="text"
            className="form-control"
            value={question_topic}
            onChange={onChangeTopic}
          />
        </div>
        <div className="form-group">
          <label>Year: </label>
          <input
            type="text"
            className="form-control"
            value={question_comp}
            onChange={onChangeComp}
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
              checked={question_level === "Elementary"}
              onChange={onChangeQuestionLevel}
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
              checked={question_level === "Intermediate"}
              onChange={onChangeQuestionLevel}
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
              checked={question_level === "Advanced"}
              onChange={onChangeQuestionLevel}
            />
            <label className="form-check-label">Advanced</label>
          </div>
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default Edit;
