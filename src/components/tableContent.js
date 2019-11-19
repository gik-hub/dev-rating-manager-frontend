import React from 'react';
import { Link } from 'react-router-dom';

const TableBody = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <tr key={i}>
          <td><Link to={`/users/${item.id}`} className="name">{item.name}</Link></td>
          <td style={item.quality >= 1 ? { color: 'green' } : { color: 'red' }}>{item.quality}</td>
          <td style={item.quantity >= 1 ? { color: 'green' } : { color: 'red' }}>{item.quantity}</td>
          <td style={item.initiative >= 1 ? { color: 'green' } : { color: 'red' }}>{item.initiative}</td>
          <td style={item.integration >= 1 ? { color: 'green' } : { color: 'red' }}>{item.integration}</td>
          <td style={item.communication >= 1 ? { color: 'green' } : { color: 'red' }}>{item.communication}</td>
          <td style={item.professionalism >= 1 ? { color: 'green' } : { color: 'red' }}>{item.professionalism}</td>
          <td>
            <Link to={`/ratings/rate/${item.id}`}>
              <button className="button" type="button"> Rate </button>
            </Link>

          </td>
        </tr>
      ))}
    </>
  );
};

export default TableBody;
