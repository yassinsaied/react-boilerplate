import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import { COUNTRY_LISTE } from "../../services/helpres";
import { getUniversity } from "../../services/diff_service";
import "./verticalSearch.css";

function VerticalSearch() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [resultSearch, setResultSearch] = useState(null);

  //style select

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 5,
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };

  // change select

  const handleChangeSelect = async (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption.value);
    try {
      let resyltSearch = await getUniversity(selectedOption.value);
      console.log(resyltSearch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row d-flex">
        <div className="col-4">
          <div className="card mt-5 p-4 bg-light">
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
            <div className="mb-3">
              <Select
                styles={customStyles}
                options={COUNTRY_LISTE}
                defaultValue={selectedOption}
                value={selectedOption}
                onChange={handleChangeSelect}
                placeholder="Choose state..."
              />
            </div>

            <span className="text mb-4">88 branding projects</span>
          </div>
        </div>
        <div className="col-8">
          <div className="card mt-5 bg-light">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="career-search mb-60">
                  <div className="filter-result">
                    <h5 className="mb-30 mt-3 ff-montserrat">
                      Total Job Openings : 89
                    </h5>

                    <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                      <div className="job-left my-2 d-md-flex align-items-center flex-wrap">
                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                          FD
                        </div>
                        <div className="job-content">
                          <h5 className="title-university text-md-left">
                            Front End Developer
                          </h5>
                          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans mt-3">
                            <li className="me-md-2">
                              <FontAwesomeIcon icon={faLocationDot} /> Los
                              Angeles
                            </li>
                            <li className="me-md-2">
                              <FontAwesomeIcon icon={faDollarSign} />{" "}
                              2500-3500/pm
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticalSearch;
