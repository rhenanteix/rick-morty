import React from "react";

const InputGroup = ({ total, name, setId }) => {
  return (
    <div class="input-group mb-3">
      <select onChange={e=>setId(e.target.value)} class="form-select" id={name}>
        <option selected>selecione um episódio</option>
        {[...Array(total).keys()].map(x=> {
            return <option value={x + 1}> {name} {x + 1}</option>
        })}
      </select>
    </div>
  );
};

export default InputGroup;
