import React from 'react'

export default function Pagination({postsPerPage, totalPosts, paginate}) {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination-nav">
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={(e) => paginate(number, e)} href="!#" >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    ) 
}