import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Episode = () => {
  return (
    <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
      <div className="job-left my-2 d-md-flex align-items-center flex-wrap">
        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
          FD
        </div>
        <div className="job-content">
          <h5 className="title-university text-md-left">Front End Developer</h5>
          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans mt-3">
            <li className="me-md-2">
              <FontAwesomeIcon icon={faLocationDot} /> Los Angeles
            </li>
            <li className="me-md-2">
              <FontAwesomeIcon icon={faDollarSign} /> 2500-3500/pm
            </li>
            <li className="me-md-2">
              <FontAwesomeIcon icon={faClock} /> Full Time
            </li>
          </ul>
        </div>
      </div>
      <div className="job-right my-4 flex-shrink-0">
        <NavLink
          to="#"
          className="btn d-block w-100 d-sm-inline-block btn-light"
        >
          Apply now
        </NavLink>
      </div>
    </div>
  );
};

export default Episode;
