import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let p = await Promise.all(
        data.residents.map((v) => {
          return fetch(v).then((res) => res.json());
        })
      );
      setResults(p);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">
          Localização: {name === "" ? "Unknown" : name}
        </h1>
        <h5 className="text-center">
          Dimensão: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">
          Tipo: {type === "" ? "Unknown" : type}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Escolha uma localização</h4>
          <InputGroup setId={setId} name="Localizacao" total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
