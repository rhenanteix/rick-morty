import React from 'react'
import styles from './search.module.scss'

const Search = ({ setSearch, setPageNumber }) => {
    return (
        <form className="d-flex justify-content-center gap-4 mb-5">
            <input
             onChange={p=> {
                 setPageNumber(1)
                 setSearch(p.target.value)
             }}
             placeholder="Aqui você pesquisa Morty!!"
             type="text"
             className={styles.input}
             />
            <button onClick={c=> {c.preventDefault()}} className="btn btn-primary fs-5">Pesquisar!</button>
        </form>
    )
}

export default Search
