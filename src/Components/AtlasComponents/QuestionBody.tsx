import React from "react";

const QuestionBody = (props) => {
  return (
    <div className=" rounded-lg overflow-hidden bg-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-2 overflow-y-scroll min-h-screen max-h-[72rem] border-2 border-gray-300 dark:border-gray-800 dark:bg-gray-800">
        {props.filterBody()}
        {props.questions.length === 0 && (
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
};

export default QuestionBody;
