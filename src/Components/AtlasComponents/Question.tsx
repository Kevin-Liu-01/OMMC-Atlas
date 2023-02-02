import React, { useState } from "react";
import { CheckCircleIcon, ArrowsExpandIcon } from "@heroicons/react/outline";

let Latex = require("react-latex");

const Question = (props) => {
  const [showAnswer, setShowAnswer] = useState(true);

  function difficultyColor(level) {
    let difficultyString = "";
    if (level === "Elementary") {
      difficultyString = "bg-green-300 text-green-800";
    } else if (level === "Intermediate") {
      difficultyString = "bg-orange-300 text-orange-800";
    } else if (level === "Advanced") {
      difficultyString = "bg-red-300 text-red-800";
    }
    return ` px-2 py-2 sm:py-1 text-xs sm:text-sm mt-2 md:text-base font-semibold rounded-lg shadow-sm inline-block
      ${difficultyString}`;
  }

  function topicColor(topic) {
    let topicString = "";
    if (topic === "Geometry") {
      topicString = "bg-blue-300 text-blue-800";
    } else if (topic === "Number Theory") {
      topicString = "bg-yellow-300 text-yellow-800";
    } else if (topic === "Algebra") {
      topicString = "bg-purple-300 text-purple-800";
    } else if (topic === "Combinatorics") {
      topicString = "bg-cyan-300 text-cyan-800";
    }
    return `mt-3 mr-1 px-2 py-2 sm:py-1 text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-sm inline-block ${topicString}`;
  }

  return (
    <div className="bg-white overflow-hidden dark:bg-gray-700 shadow p-4 sm:p-6 rounded-lg">
      <div className="text-blue-700 dark:text-blue-400 font-medium text-sm mb-3">
        {" "}
        {props.record.question_comp}
      </div>
      <div className="shadow-inner bg-gray-100 dark:bg-gray-600 dark:text-[#c0c4cb]  rounded-lg overflow-hidden mb-3 ">
        <p className="relative p-2 min-h-[10rem] max-h-[10rem] overflow-auto scrollbar text-sm md:text-base leading-6">
          <Latex>{props.record.question_name}</Latex>
        </p>
      </div>
      <div className="mb-3">
        {showAnswer === true && (
          <button
            className=" px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-sm hover:bg-gray-600 focus:ring-opacity-75 duration-150 ease-in-out"
            onClick={() => setShowAnswer(false)}
          >
            View Solution <CheckCircleIcon className="inline pb-1 h-5 w-5 " />
          </button>
        )}
        {showAnswer === false && (
          <>
            <div className="text-blue-700 dark:text-blue-400 font-medium text-sm mb-1">
              Solution
            </div>
            <div className="shadow-inner bg-gray-100 dark:bg-gray-600 dark:text-[#c0c4cb] rounded-lg overflow-hidden">
              <div className="relative p-2 h-[7rem] overflow-auto scrollbar text-xs md:text-base">
                <Latex>{props.record.question_position}</Latex>
              </div>
            </div>
          </>
        )}
      </div>
      <div className=" ">
        <a
          className="px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-sm hover:bg-gray-600 focus:ring-opacity-75 duration-150 ease-in-out"
          href={"/view/" + props.record._id}
        >
          View Problem <ArrowsExpandIcon className="inline pb-1 h-5 w-5 " />
        </a>
      </div>
      <div className={topicColor(props.record.question_topic)}>
        {props.record.question_topic}
      </div>{" "}
      <div className={difficultyColor(props.record.question_level)}>
        {props.record.question_level}
      </div>
      {/* <a
          href="/"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Delete
        </a> */}
    </div>
  );
};

export default Question;
