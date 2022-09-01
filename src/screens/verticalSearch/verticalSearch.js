import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { FUTURAMA_LIST } from "../../services/helpres";
import { getFuturama } from "../../services/diff_service";
import Characters from "./characters/characters";
import Cast from "./cast/cast";
import Episode from "./episode/episode";
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
    let resyltSearch = null;
    setSelectedOption(selectedOption);

    try {
      resyltSearch = await getFuturama(selectedOption.value);
      console.log(resyltSearch);
      setResultSearch(resyltSearch.data);
    } catch (error) {
      console.log(error);
    }
  };

  //switch component
  const switchComponent = (selectedOption) => {
    let component;

    switch (selectedOption?.value) {
      case "characters":
        component = <Characters characters={resultSearch} />;
        break;
      case "cast":
        component = <Cast casts={resultSearch} />;
        break;

      case "episodes":
        component = <Episode episodes={resultSearch} />;
        break;
      default:
        component = <p className="mx-auto">{"No results for now"}</p>;
        break;
    }

    return component;
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
                options={FUTURAMA_LIST}
                defaultValue={selectedOption}
                value={selectedOption}
                onChange={handleChangeSelect}
                placeholder="Choose Futurama ..."
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
                      Results : {resultSearch !== null && resultSearch.length}{" "}
                    </h5>
                    {switchComponent(selectedOption)}
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
