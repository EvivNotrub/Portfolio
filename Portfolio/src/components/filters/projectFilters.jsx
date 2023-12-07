import { useState, useEffect } from "react";
import data from "../../data/projects.json";
import "./projectFilters.scss";

function ProjectFilters() {
  const [filters, setFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  console.log("filters", filters, "activeFilter", activeFilter);

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

export default ProjectFilters;
