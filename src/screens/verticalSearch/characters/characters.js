import React, { useState, useEffect } from "react";
import Spinner from "../../../components/spinner/spinner";
import ShowMore from "../../../components/showMore/showMore";
const Characters = ({ characters }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        characters !== null &&
        characters.map((character, key) => {
          return (
            <div key={key} className="row">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={character.images && character.images.main}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {character.name.first} {character.name.last}
                      </h5>
                      <div className="card-info">
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="articles">Home Planet</span>
                            <span className="number1">
                              {character.homePlanet}
                            </span>
                          </div>

                          <div className="d-flex flex-column">
                            <span className="followers">Gender</span>
                            <span className="number2">{character.gender}</span>
                          </div>

                          <div className="d-flex flex-column">
                            <span className="rating">Age</span>
                            <span className="number3">{character.age}</span>
                          </div>
                        </div>

                        <ShowMore arrayOftext={character.sayings} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Characters;
