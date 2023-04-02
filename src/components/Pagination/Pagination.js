import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({setPageNumber, pageNumber, info}) => {
    let [width, setWidth] = useState(window.innerWidth)

    let updateDimension = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimension)
        return () => window.removeEventListener("resize", updateDimension)
    }, [])

    return (
        <>
        <style jsx>

        {`
         @media (max-width: 768px) {
             .next, .prev {
                 display: none;
                 color: white;
             }
            .pagination {
                font-size: 14px;
            } 
         }
        `}
        </style>
       <ReactPaginate
       className="pagination justify-content-center gap-4 my-4"
       forcePage={pageNumber=== 1 ? 0 : pageNumber - 1}
       nextLabel="Próximo"
       previousLabel="Voltar"
       nextClassName="btn btn-primary next"
       previousClassName="btn btn-primary prev"
       pageClassName="page-item"
       pageLinkClassName="page-link"
       activeClassName="active"
       marginPagesDisplayed={6}
       onPageChange={(data) => {
        setPageNumber(data.selected + 1);
       }}
       pageCount={info?.pages}
        />
        </>
    )
}

export default Pagination
