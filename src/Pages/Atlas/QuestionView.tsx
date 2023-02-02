import React, { useEffect, useState } from "react";
import axios from "axios";
import Constants from "../../config.js";
import { useParams } from "react-router-dom";
import { ArrowCircleLeftIcon, CheckCircleIcon } from "@heroicons/react/outline";
let Latex = require("react-latex");

const View = () => {
  const [question_name, setName] = useState("");
  const [question_position, setPosition] = useState("");
  const [question_level, setLevel] = useState("");
  const [question_topic, setTopic] = useState("");
  const [question_comp, setComp] = useState("");
  const [showAnswer, setShowAnswer] = useState(true);
  const { id } = useParams();

  // or fallback UI
  // This will get the question based on the id from the database.
  useEffect(() => {
    console.log("View Called");
    axios
      .get(`${Constants.SERVER_HOST}/question/${id}`)
      .then(
        (response) => (
          console.log(`${Constants.SERVER_HOST}/question/${id}`),
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

  function difficultyColor() {
    let difficultyString = "";
    if (question_level === "Elementary") {
      difficultyString = "bg-green-300 text-green-800";
    } else if (question_level === "Intermediate") {
      difficultyString = "bg-orange-300 text-orange-800";
    } else if (question_level === "Advanced") {
      difficultyString = "bg-red-300 text-red-800";
    }
    return (
      difficultyString +
      " text-xl ml-[0.4rem] px-2 py-1 font-semibold rounded-lg shadow-sm inline-block"
    );
  }

  function topicColor(topic) {
    let topicString = "";
    if (topic === "Geometry") {
      topicString = "bg-blue-300 text-blue-800";
    } else if (topic === "Number Theory") {
      topicString = "bg-yellow-300 text-yellow-800";
    } else if (topic === "Algebra") {
      topicString = "bg-red-300 text-red-800";
    } else if (topic === "Combinatorics") {
      topicString = "bg-purple-300 text-purple-800";
    }
    return (
      topicString +
      " text-xl px-2 py-1 font-semibold rounded-lg shadow-sm inline-block"
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="h-16 w-16"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-2xl drop-shadow-lg">
          <div className="flex text-blue-700 dark:text-blue-400 font-medium text-2xl mb-3">
            {question_comp}
            <a
              className="justify-self-end ml-auto text-underline text-red-700 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500 duration-150"
              href="/atlas"
            >
              <button>
                Return to Atlas{" "}
                <ArrowCircleLeftIcon className="mb-1 inline h-6 w-6" />
              </button>
            </a>
          </div>
          <div className="shadow-inner bg-gray-100 dark:bg-gray-600 dark:text-[#c0c4cb] rounded-lg overflow-hidden mb-3">
            <p className=" p-2 min-h-[15rem] max-h-[15rem] overflow-auto text-lg md:text-xl leading-6">
              <Latex>{question_name}</Latex>
            </p>
          </div>
          <div className="mb-3">
            {showAnswer === true && (
              <button
                className="text-xl px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-700 focus:ring-opacity-75 duration-150 ease-in-out"
                onClick={() => setShowAnswer(false)}
              >
                View Solution{" "}
                <CheckCircleIcon className="inline mb-1 h-5 w-5 " />
              </button>
            )}
            {showAnswer === false && (
              <>
                <div className="text-blue-700 dark:text-blue-400 font-medium text-2xl mb-1">
                  Solution
                </div>
                <div className="shadow-inner bg-gray-100 dark:bg-gray-600 dark:text-[#c0c4cb] rounded-lg overflow-hidden">
                  <div className=" p-2 h-[15rem] overflow-auto text-lg md:text-xl">
                    <Latex>{question_position}</Latex>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className={topicColor(question_topic)}>{question_topic}</div>{" "}
          <div className={difficultyColor()}>{question_level}</div>
          {/* <a
        href="/"
        onClick={() => {
          props.deleteRecord(_id);
        }}
      >
        Delete
      </a> */}
        </div>
      </div>
    </div>
  );
};

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default View;
