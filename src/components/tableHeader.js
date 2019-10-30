import React from "react";

const TableHeader = ({ columns }) => {
    return (
        <div className="table-header-container">
            {columns.map(column => <h5 key={column} className="block">{column}</h5>)}
        </div>
    );
};

export default TableHeader;
