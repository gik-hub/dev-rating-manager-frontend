import React from "react";
import { Link } from 'react-router-dom'

const TableBody = ({ data }) => {
    console.log('the data here is : ', data);
    return (
        <React.Fragment>
            {data.map((item, i) => <tr key={i}>
                <td style={{ color: 'rgb(100, 118, 227)' }}>{item.name}</td>
                <td style={item.quality >= 1 ? { color: 'green' } : { color: 'red' }}>{item.quality}</td>
                <td style={item.quantity >= 1 ? { color: 'green' } : { color: 'red' }}>{item.quantity}</td>
                <td style={item.initiative >= 1 ? { color: 'green' } : { color: 'red' }}>{item.initiative}</td>
                <td style={item.integration >= 1 ? { color: 'green' } : { color: 'red' }}>{item.integration}</td>
                <td style={item.communication >= 1 ? { color: 'green' } : { color: 'red' }}>{item.communication}</td>
                <td style={item.professionalism >= 1 ? { color: 'green' } : { color: 'red' }}>{item.professionalism}</td>
                <td><Link to={'/ratings/rate/' + item.id}>
                    <button className="button"> Rate </button>
                </Link></td>
            </tr>
            )}
        </React.Fragment>
    );
};

export default TableBody;
