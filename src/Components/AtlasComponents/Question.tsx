import React, { useState } from "react";
import { CheckCircleIcon, ArrowsExpandIcon } from "@heroicons/react/outline";

let Latex = require("react-latex");

const Question = (props) => {
  const [showAnswer, setShowAnswer] = useState(true);
  return (
    <div className="bg-white overflow-hidden dark:bg-gray-700 shadow p-4 sm:p-6 rounded-lg">
      <div className="text-blue-700 dark:text-blue-400 font-medium text-sm mb-3">
        {" "}
        {props.record.question_comp}
      </div>
      <div className="bg-gray-100 dark:bg-gray-300  rounded-lg overflow-hidden mb-3">
        <p className="relative p-2 min-h-[10rem] max-h-[10rem] overflow-auto scrollbar text-sm md:text-base leading-6">
          <Latex>{props.record.question_name}</Latex>
        </p>
      </div>
      <div className="mb-3">
        {showAnswer === true && (
          <button
            className=" px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-700 focus:ring-opacity-75 duration-150 ease-in-out"
            onClick={() => setShowAnswer(false)}
          >
            View Solution <CheckCircleIcon className="inline mb-1 h-5 w-5 " />
          </button>
        )}
        {showAnswer === false && (
          <>
            <div className="text-blue-700 dark:text-blue-400 font-medium text-sm mb-1">
              Solution
            </div>
            <div className="bg-gray-100 dark:bg-gray-300 rounded-lg overflow-hidden">
              <div className="relative p-2 h-[7rem] overflow-auto scrollbar text-xs md:text-base">
                <Latex>{props.record.question_position}</Latex>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mb-[0.625rem]">
        <a
          className="px-2 py-1 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-700 focus:ring-opacity-75 duration-150 ease-in-out"
          href={"/view/" + props.record._id}
        >
          View Problem <ArrowsExpandIcon className="inline mb-1 h-5 w-5 " />
        </a>
      </div>
      <button className="px-2 py-1 font-semibold rounded-lg shadow-md bg-yellow-300">
        {props.record.question_topic}
      </button>{" "}
      <button className="ml-[0.4rem] px-2 py-1 font-semibold rounded-lg shadow-md bg-green-300">
        {props.record.question_level}
      </button>
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
