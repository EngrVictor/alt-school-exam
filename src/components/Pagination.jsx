import React from 'react'
import './styles/pagination.css'

const Pagination = ({ total, paginate, itemsPerPage, prev, next, current}) => {
    let pageNum = [];

    for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
        pageNum.push(i);
      }

  return (
    <>
        <ul className='pagination'>
            <li onClick={() => {
                    prev(this)
                    }} style={ current === 1 ? { color: 'grey', backgroundColor: 'black', cursor: 'not-allowed'}: {}}>&larr; Prev</li>
            {pageNum.map((num) => (
                <li key={num} onClick={() => {
                    paginate(num)
                    }}>
                    {num}
                </li>
            ))}
            <li onClick={() => {
                    next()
                    }} style={ current >= total / itemsPerPage ? { color: 'grey', backgroundColor: 'black ', cursor: 'not-allowed'}: {}}>Next &rarr;</li>
        </ul>
    </>
  )
}

export default Pagination