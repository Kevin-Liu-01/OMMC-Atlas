import React, { useState, useEffect } from "react";
import axios from "axios";
import Constants from "./config.js";
import Fuse from "fuse.js";
import {
  SearchIcon,
  CheckCircleIcon,
  ArrowsExpandIcon,
} from "@heroicons/react/outline";

import "../styling/recordList.css";

var Latex = require("react-latex");

const Record = (props) => {
  const [showAnswer, setShowAnswer] = useState(true);
  return (
    <div className="bg-white dark:bg-gray-700 shadow p-4 sm:p-6 rounded-lg">
      <div className="text-blue-700 dark:text-blue-400 font-medium text-sm mb-3">
        {" "}
        {props.record.question_comp}
      </div>
      <div className="bg-gray-100 dark:bg-gray-300  rounded-lg overflow-hidden mb-3">
        <p className=" p-2 min-h-[10rem] max-h-[10rem] overflow-auto text-sm md:text-base leading-6">
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
              <div className=" p-2 h-[7rem] overflow-auto text-xs md:text-base">
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

const RecordList = (props) => {
  // This is the constructor that shall store our data retrieved from the database
  const [questions, setQuestions] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [geometry, setGeo] = useState(0);
  const [combinatorics, setComb] = useState(0);
  const [numberTheory, setNum] = useState(0);
  const [algebra, setAlg] = useState(0);

  const searchData = () => {
    if (searchInput === "") {
      axios
        .get(`${Constants.SERVER_HOST}/record/`)
        .then((response) => {
          console.log(
            `/record/ returned response from: ${Constants.SERVER_HOST}/record/`
          );
          setQuestions(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      return;
    }
    const fuse = new Fuse(questions, {
      keys: ["question_name"],
    });
    const result = fuse.search(searchInput);

    const matches = [];
    if (!result.length) {
      axios
        .get(`${Constants.SERVER_HOST}/record/`)
        .then((response) => {
          console.log(
            `/record/ returned response from: ${Constants.SERVER_HOST}/record/`
          );
          setQuestions(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      result.forEach(({ item }) => matches.push(item));
      setQuestions(matches);
    }
  };

  function listParser(array, topic, incrementFunction, increment) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].question_topic === topic) incrementFunction(increment++);
    }
  }

  // This method will get the data from the database.
  useEffect(() => {
    axios
      .get(`${Constants.SERVER_HOST}/record/`)
      .then((response) => {
        console.log(
          `/record/ returned response from: ${Constants.SERVER_HOST}/record/`
        );
        setQuestions(response.data);
        setGeo(0);
        setComb(0);
        setNum(0);
        setAlg(0);
        listParser(response.data, "Geometry", setGeo, geometry);
        listParser(response.data, "Combinatorics", setComb, combinatorics);
        listParser(response.data, "Number Theory", setNum, numberTheory);
        listParser(response.data, "Algebra", setAlg, algebra);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [difficultyFilter]);

  // This method will delete a record based on the method
  async function deleteRecord(id) {
    // axios.delete(`${Constants.SERVER_HOST}/${id}`).then((response) => {
    //   console.log(response.data);
    // });

    axios.post(`${Constants.SERVER_HOST}/delete/${id}`).then((response) => {
      console.log(response.data);
    });

    console.log("Deleterecord is called");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setQuestions(questions.filter((el) => el._id !== id));
  }

  // This method will map out the users on the table
  function recordList() {
    return questions.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  function difficultyFilterSet() {
    return questions
      .filter(
        (el) =>
          (difficultyFilter === "" || el.question_level === difficultyFilter) &&
          (topicFilter === "" || el.question_topic === topicFilter)
      )

      .map((currentrecord) => {
        return (
          <Record
            record={currentrecord}
            deleteRecord={deleteRecord}
            key={currentrecord._id}
          />
        );
      });
  }

  function topicFilterSet() {
    return questions
      .filter(
        (el) =>
          (topicFilter === "" || el.question_topic === topicFilter) &&
          (difficultyFilter === "" || el.question_level === difficultyFilter)
      )

      .map((currentrecord) => {
        return (
          <Record
            record={currentrecord}
            deleteRecord={deleteRecord}
            key={currentrecord._id}
          />
        );
      });
  }

  function allFilterSet() {
    return questions
      .filter(
        (el) =>
          el.question_topic === topicFilter &&
          el.question_level === difficultyFilter
      )

      .map((currentrecord) => {
        return (
          <Record
            record={currentrecord}
            deleteRecord={deleteRecord}
            key={currentrecord._id}
          />
        );
      });
  }

  function onDropSubmit(e) {
    setDifficultyFilter(e.target.value);
  }

  function onTopicDropSubmit(e) {
    setTopicFilter(e.target.value);
  }

  function DifficultyDropdown() {
    return (
      <select
        className="w-[100%] text-gray-500 md:mb-1 dark:bg-gray-200 rounded-md border-2 border-gray-400 shadow-sm overflow-hidden focus:border-red-700 sm:text-sm duration-150 ease-in-out"
        value={difficultyFilter}
        onChange={onDropSubmit}
      >
        <option value=""> Difficulty </option>
        <option value="Elementary">Elementary</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    );
  }

  function TopicDropdown() {
    return (
      <select
        className="w-[100%] text-gray-500  rounded-md border-2 border-gray-400 shadow-sm overflow-hidden focus:clear-none focus:border-red-700 sm:text-sm duration-150 ease-in-out"
        value={topicFilter}
        onChange={onTopicDropSubmit}
      >
        <option value=""> Topic </option>
        <option value="Geometry">Geometry</option>
        <option value="Number Theory">Number Theory</option>
        <option value="Algebra">Algebra</option>
        <option value="Combinatorics">Combinatorics</option>
      </select>
    );
  }

  function showListDiff() {
    switch (difficultyFilter) {
      default: {
        return recordList();
      }
      case "":
        return recordList();
      case "Elementary":
        return difficultyFilterSet();
      case "Intermediate":
        return difficultyFilterSet();
      case "Advanced":
        return difficultyFilterSet();
    }
  }

  function showListTopic() {
    switch (topicFilter) {
      default: {
        return recordList();
      }
      case "":
        return recordList();
      case "Geometry":
        return topicFilterSet();
      case "Number Theory":
        return topicFilterSet();
      case "Algebra":
        return topicFilterSet();
      case "Combinatorics":
        return topicFilterSet();
    }
  }

  function filterBody() {
    if (difficultyFilter === "") {
      return showListTopic();
    }
    if (topicFilter === "") {
      return showListDiff();
    } else {
      return allFilterSet();
    }
  }

  function listBody() {
    return (
      <div className=" rounded-lg overflow-hidden bg-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-2 overflow-y-scroll min-h-screen max-h-[72rem] border-2 border-gray-300 dark:border-gray-800 dark:bg-gray-800">
          {filterBody()}
          {questions.length === 0 && (
            <div className="col-span-3 h-[100%] bg-gray-100 text-center text-red-700 pt-20 px-8">
              <div className="text-5xl font-extrabold py-4">Error Code 01</div>
              <div className=" text-xl max-w-2xl mx-auto">
                Due to a server error, questions were not able to be retreived.
                Contact the server admin through OMMC Discord to resolve the
                issue.
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // This following section will display the table with the questions.
  return (
    <div className="min-h-screen  overflow-hidden">
      <head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </head>
      <div className="py-16  px-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center">
        <div className="max-w-3xl mx-auto mb-6">
          <div className="text-center text-3xl sm:text-5xl font-extrabold text-white dark:text-dark-high-emphasis mb-6">
            Year 1 Atlas
          </div>
          <div className="border-2 border-red-300 rounded-xl overflow-hidden max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-700 " />
              </div>

              <form className="inline">
                <input
                  className="block w-full pl-12 pr-3 py-3 bg-red-100 placeholder-gray-900 dark:placeholder-red-800 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition text-black dark:text-white"
                  type="search"
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    searchData();
                  }}
                  onKeyDown={(e) => {
                    setSearchInput(e.target.value);
                    searchData();
                  }}
                  value={searchInput}
                  placeholder="Search for a question"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 px-4 lg:px-9 pb-4 grid grid-cols-10 bg-slate-100 dark:bg-gray-900">
        <div className="lg:col-span-1 lg:mr-3 col-span-10 overflow-y-auto">
          <div className="text-left ml-1">
            <div className="text-gray-500 pb-1 mb-1 border-b-2 border-gray-300 dark:border-gray-500">
              Topics
            </div>
            <div className="text-gray-500 dark:text-dark-high-emphasis">
              Geometry ({geometry})
            </div>
            <div className="text-gray-500 dark:text-dark-high-emphasis">
              Number Theory ({numberTheory})
            </div>

            <div className="text-gray-500 dark:text-dark-high-emphasis">
              Algebra ({algebra})
            </div>
            <div className="text-gray-500 dark:text-dark-high-emphasis">
              Combinatorics ({combinatorics})
            </div>
          </div>

          <div className="text-left ml-1 mt-2 mb-6">
            <div className="text-gray-500 pb-1 mb-1 border-b-2 border-gray-300 dark:border-gray-500">
              Filters
            </div>
            <div className="text-center">
              <DifficultyDropdown />
            </div>
            <div className="text-center">
              <TopicDropdown />
            </div>
          </div>
        </div>

        <div className="py-0.5 px-1 lg:col-span-9 col-span-10 overflow-y-auto">
          <div className="">{listBody()}</div>
        </div>
      </div>
    </div>
  );
};

export default RecordList;
