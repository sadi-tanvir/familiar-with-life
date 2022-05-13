import React from "react";
import { Helmet } from "react-helmet-async";
import FAQFormat from "./FAQFormat"
import {data} from "./Question"

const QuestionAndAnswer = () => {
  
  return (
    <>
      <Helmet>
        <title>Blogs - Familiar With Life</title>
      </Helmet>
      <div className="accordion my-5 min-h-screen px-3 md:px-24" id="accordionExample">
          <h1 className="text-center text-red-500 fw-bold my-5 text-5xl">My Blogs</h1>
          {
            data.map(elem => <FAQFormat key={elem.id} elem={elem} />)
          }
      </div>
    </>
  );
};

export default QuestionAndAnswer;
