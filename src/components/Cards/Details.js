import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  let [fetchData, updateFetchedData] = useState([]);
  let { name, image, location, origin, gender, species, type, status } =
    fetchData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data.results);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="">{name}</h1>
        <img src={image} alt="" className="img-fluid" />

        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
            <div className="">
                <span className="fw-bold">
                        Genêro: {gender}
                </span>
            </div>
            <div className="">
                <span className="fw-bold">
                        Espécies: {species}
                </span>
            </div>
            <div className="">
                <span className="fw-bold">
                        Tipo: {type === "" ? "Unknown" : type}
                </span>
            </div>
            <div className="">
                <span className="fw-bold">
                        Origem: {origin?.name}
                </span>
            </div>
            <div className="">
                <span className="fw-bold">
                        Localização: {location?.name}
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
