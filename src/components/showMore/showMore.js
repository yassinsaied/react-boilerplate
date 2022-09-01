import React, { useState } from "react";
import "./showMore.css";

const ShowMore = ({ arrayOftext }) => {
  const [showMore, setShowMore] = useState(true);

  const browsArray = (array) => {
    let results = [];
    let length;
    showMore && array.length > 5 ? (length = 5) : (length = array.length);
    for (let index = 0; index < length; index++) {
      results.push(
        <p key={index} className="fs-6 quote">
          <small>{arrayOftext[index]}</small>
        </p>
      );
    }
    return results;
  };
  return (
    <>
      <div className="saying my-2">
        {browsArray(arrayOftext)}

        <div className="d-fex">
          <button
            className="btn btn-primary my-2"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show more" : "Show less"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowMore;
