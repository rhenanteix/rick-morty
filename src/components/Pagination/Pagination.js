import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({setPageNumber, pageNumber, info}) => {
    return (
       <ReactPaginate
       className="pagination justify-content-center gap-4 my-4"
       nextLabel="Próximo"
       previousLabel="Voltar"
       nextClassName="btn btn-primary"
       previousClassName="btn btn-primary"
       pageClassName="page-item"
       pageLinkClassName="page-link"
       activeClassName="active"
       onPageChange={(data) => {
        setPageNumber(data.selected + 1);
       }}
       pageCount={info?.pages}
        />
    )
}

export default Pagination
