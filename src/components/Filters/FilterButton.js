import React from "react";

const FilterButton = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
          .c:checked + label {
            background-color: #6495ed;
            color: #fff;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-chack">
        <input
          onClick={() => {
              setPageNumber(1);
              task(items);
          }}
          className="form-check-input c"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
