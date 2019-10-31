import React from 'react';
import PropTypes from 'prop-types';

const EngeneerList = ({ engineers, onRateClick }) => {
  
  return (
    <table>
      <caption>My engineers</caption>
      <thead>
        <tr>
          <th scope="col"> Eng Id</th>
          <th scope="col"> Name </th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          {/* <td colspan="3">Data update per week</td> */}
          <td>
            {' '}
            <button> Add Engineer </button>
          </td>
        </tr>
      </tfoot>
      <tbody>
        {engineers.map(engineer => {
          return (
            <tr key={engineer.id}>
              <td> {engineer.name} </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onRateClick(engineer)}
                >
                  Rate
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

EngeneerList.propTypes = {
  engineers: PropTypes.array.isRequired,
  onRateClick: PropTypes.func.isRequired
};

export default EngeneerList;
