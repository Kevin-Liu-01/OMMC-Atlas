import React, { useEffect, useState } from "react";
// This will require to npm install axios
import axios from "axios";
import { withRouter } from "react-router";
import Constants from "./config.js";
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
      <h3>Question Content:</h3>
      <Latex>{question_name}</Latex>
      <h2>Question Solution:</h2>
      {showAnswer === true && (
        <button onClick={() => setShowAnswer(false)}>View</button>
      )}
      {showAnswer === false && <Latex>{question_position}</Latex>}
    </div>
  );
};

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default withRouter(View);
