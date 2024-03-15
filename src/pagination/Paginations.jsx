import React, { useState } from 'react';

const Paginations = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get the current page of items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {/* Render current page items */}
            {currentItems.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            
            {/* Pagination buttons */}
            <div>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Paginations;