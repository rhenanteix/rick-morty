import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, updateFetchedData] = useState([]);
  let {info, results} = fetchData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(()=>{
    (async function() {
        let data = await fetch(api).then(res=>res.json())
        updateFetchedData(data);
        console.log(data.results)
    })()
  }, [api])
  return (
    <div className="App">
     <h1 className="text-center ubuntu">
      Rick and Morty -  <span className="text-primary">Teste Green acesso</span>
      </h1>

    <div className="container">
      <div className="row">
        <div className="col-3">
          <Filters/>
        </div>
        <div className="col-8">
          <div className="row" >
            <div className="col-4">
              <Cards/>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
