import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import data from "../../data/projects.json";
import "./projectFilters.scss";

function ProjectFilters({ activeFilter, setActiveFilter }) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters(data.filters);
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="filters">
      {filters &&
        filters.map((filter, index) => (
          <button
            key={filter + index}
            className={`filters__filter ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => handleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      <button
        className={`filters__filter ${activeFilter === "all" ? "active" : ""}`}
        onClick={() => handleFilter("all")}
      >
        All
      </button>
    </div>
  );
}

ProjectFilters.propTypes = {
  activeFilter: PropTypes.string,
  setActiveFilter: PropTypes.func,
};

export default ProjectFilters;
