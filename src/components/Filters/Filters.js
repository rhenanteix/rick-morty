import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
    let clear = () => {
        setStatus("");
        setPageNumber("");
        setGender("");
        setSpecies("");
        window.location.reload(false) 
    }
  return (
    <div className="col-lg-12 col-6 mb-5">
      <div className="text-center fw-bold fs-4 mb-4">Filtros</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Limpar filtros
      </div>
      <div className="accordion" id="accordionExample">
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
    </div>
  );
};

export default Filters;
