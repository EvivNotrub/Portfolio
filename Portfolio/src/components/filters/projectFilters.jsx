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
    if (filter === "all") {
      return setActiveFilter(["all"]);
    }
    if (activeFilter.includes("all")) {
      const newFilter = activeFilter.filter((f) => f !== "all");
      return setActiveFilter([...newFilter, filter]);
    }
    if (activeFilter.includes(filter)) {
      const newFilter = activeFilter.filter((f) => f !== filter);
      if (newFilter.length === 0) {
        return setActiveFilter(["all"]);
      }
      return setActiveFilter(newFilter);
    }
    setActiveFilter([...activeFilter, filter]);
  };

  return (
    <div className="filters">
      {filters &&
        filters.map((filter, index) => (
          <button
            key={filter + index}
            className={`filters__filter ${
              activeFilter.includes(filter) ? "active" : ""
            }`}
            onClick={() => handleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      <button
        className={`filters__filter ${
          activeFilter.includes("all") ? "all" : ""
        }`}
        onClick={() => handleFilter("all")}
      >
        All
      </button>
    </div>
  );
}

ProjectFilters.propTypes = {
  activeFilter: PropTypes.arrayOf(PropTypes.string),
  setActiveFilter: PropTypes.func,
};

export default ProjectFilters;
