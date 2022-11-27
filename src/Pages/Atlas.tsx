import React, { useState, useEffect } from "react";
import axios from "axios";
import Constants from "../config.js";
import Fuse from "fuse.js";
import { SearchIcon } from "@heroicons/react/outline";
import Question from "../Components/AtlasComponents/Question.tsx";
import QuestionBody from "../Components/AtlasComponents/QuestionBody.tsx";

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
  }, []);

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

  // This method will map out the users on the table
  function recordList() {
    return questions.map((currentrecord) => {
      return (
        <Question
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
          <Question
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
          <Question
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
          <Question
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

  // This following section will display the table with the questions.
  return (
    <div className="min-h-screen  overflow-hidden">
      <div className="py-16  px-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-red-500 dark:to-red-800 duration-150 ease-in-out text-center">
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
                  className="block w-full pl-12 pr-3 py-3 bg-red-100 placeholder-gray-900 dark:placeholder-red-800 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition text-gray-900 dark:text-white"
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

        <div className="py-0.5 px-1 lg:col-span-9 col-span-10 overflow-hidden">
          <QuestionBody filterBody={filterBody} questions={questions} />
        </div>
      </div>
    </div>
  );
};

export default RecordList;
