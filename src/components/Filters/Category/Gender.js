import React from "react";
import FilterButton from "../FilterButton";

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Gênero
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, i) => (
            <FilterButton
              setPageNumber={setPageNumber}
              task={setGender}
              key={i}
              name="genders"
              index={i}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
