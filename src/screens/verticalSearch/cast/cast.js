import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faLink } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import Spinner from "../../../components/spinner/spinner";

const Cast = ({ casts }) => {
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
        <div className="row pb-5 mb-4">
          {casts.map((cast, key) => {
            return (
              <div key={key} className="col-lg-4 col-md-6 mb-4 mb-lg-0 my-2">
                <div className="card shadow-sm border-0 rounded">
                  <div className="card-body p-0">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1909/1909897.png"
                      alt=""
                      className="w-100 card-img-top"
                    />
                    <div className="p-4">
                      <h6 className="mb-2">{cast.name}</h6>
                      <p className="small text-muted m-0 p-0 pb-1">
                        <FontAwesomeIcon icon={faCakeCandles} /> {cast.born}
                      </p>
                      <p className="small text-muted m-0 p-0 pb-1 d-flex  align-content-center">
                        <FontAwesomeIcon icon={faLink} className="mt-1" />
                        <Nav.Link
                          href={cast.bio.url}
                          className="fs-6 mx-2"
                          target="_blank"
                        >
                          Bio
                        </Nav.Link>
                      </p>

                      <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <i className="fa fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Cast;
