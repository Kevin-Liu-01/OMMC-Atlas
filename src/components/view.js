import React, { useEffect, useState } from "react";
// This will require to npm install axios
import axios from "axios";
import { withRouter } from "react-router";
import Constants from "./config.js";
import "../styling/view.css";

let Latex = require("react-latex");

const View = (props) => {
  // This is the constructor that stores the data.
  console.log("The constructor in edit is called");
  const [question_name, setName] = useState("");
  const [question_position, setPosition] = useState("");
  const [question_level, setLevel] = useState("");
  const [question_topic, setTopic] = useState("");
  const [question_comp, setComp] = useState("");
  const [showAnswer, setShowAnswer] = useState(true);

  // This will get the record based on the id from the database.
  useEffect(() => {
    console.log("USEFFECT CALLED");
    axios
      .get(`${Constants.SERVER_HOST}/record/${props.match.params.id}`)
      .then(
        (response) => (
          console.log(
            `${Constants.SERVER_HOST}/record/${props.match.params.id}`
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

  return (
    <div>
      <head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </head>
      <div className="questionContainer">
        <div className="columnContainer">
          <div className="questionColumns">
            <div className="header">Difficulty:</div> <p>{question_level}</p>
          </div>
          <div className="questionColumns">
            <div className="header">Topic:</div> <p>{question_topic}</p>
          </div>
          <div className="questionColumns">
            <div className="header">Year:</div> <p>{question_comp}</p>
          </div>
        </div>

        <div className="content">
          <div className="header">Question Content:</div>
          <div className="questionBody">
            <Latex>{question_name}</Latex>
          </div>
        </div>
        <div className="solution">
          <div className="header">Question Solution:</div>
          {showAnswer === true && (
            <button className="viewButton" onClick={() => setShowAnswer(false)}>
              View Solution
            </button>
          )}
          {showAnswer === false && (
            <div className="questionBody">
              <Latex>{question_position}</Latex>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default withRouter(View);
