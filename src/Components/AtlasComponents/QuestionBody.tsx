import React from "react";

const QuestionBody = (props) => {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-200 min-h-screen max-h-[71rem] border-2 border-gray-300 dark:border-gray-800 dark:bg-gray-800">
      <div className="overflow-y-scroll scrollbar scroll-smooth min-h-screen max-h-[35rem] md:max-h-[70.85rem] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-2  ">
          {props.questions.length === 0 ? (
            <div className="col-span-3 h-[100%] bg-gray-100 dark:bg-gray-800 text-center text-red-600 pt-20 md:pt-30 px-8">
              <div className="text-4xl md:text-5xl font-extrabold py-4">
                Error Code 01
              </div>
              <div className="text-lg md:text-xl max-w-2xl mx-auto font-semibold">
                Due to a server error, questions were not able to be retreived.
                Contact the server admin through OMMC Discord to resolve the
                issue.
              </div>
            </div>
          ) : (
            props.filterBody()
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionBody;
