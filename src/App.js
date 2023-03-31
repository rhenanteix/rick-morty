import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("")
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")

  let [fetchData, updateFetchedData] = useState([]);
  let {info, results} = fetchData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
 
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

    <Search setPageNumber={setPageNumber} setSearch={setSearch}/>   

    <div className="container">
      <div className="row">
        <div className="col-3">
          <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
              <Cards className="col-4" results={results}/>
          </div>
        </div>
      </div>
    </div>
    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
  </div>
  );
}

export default App;
