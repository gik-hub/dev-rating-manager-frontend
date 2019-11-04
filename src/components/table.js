import React, { Component } from 'react';
import TableHeader from "./tableHeader";
import TableContent from './tableContent';
import { connect } from 'react-redux';
import { getEngineers } from '../actions/getEngineers';

class Table extends Component {
  componentDidMount() {
    this.props.getEngineers();
  }

  render() {
    const columns = [
      'Name',
      "Quality",
      "Quantity",
      "Integration",
      "Initiative",
      "Communication",
      "Proffesionalism",
      "Rating"
    ];
    let items = [];

    const { engineers } = this.props.engineers;
    console.log('************* the engineers are : ', engineers);

    try {
      engineers.map(engineer => {
        let engineerRatings = {};
        engineerRatings.name = `${engineer.User.firstName} ${engineer.User.lastName}`,
          engineerRatings.ratings = [
            engineerRatings.quality = engineer.quality,
            engineerRatings.quantity = engineer.quantity,
            engineerRatings.initiative = engineer.initiative,
            engineerRatings.professionalism = engineer.professionalism,
            engineerRatings.communication = engineer.communication,
            engineerRatings.integration = engineer.integration,
          ]

        items.push(engineerRatings);
      }
      );

    } catch (ex) {
      console.log(ex);
    }

    console.log('the items are : ', items)

    return (
      <div>
        <p className='tableHeader'>My Developers Average Score</p>
        <table className="table table-bg">
          <tbody>
            <tr>
              {columns.map(column => <th key={column}>{column}</th>)}
            </tr>
            <TableContent data={items} />
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ getEngineers }) => ({
  engineers: getEngineers
});

export { Table as EngineerTable }
export default connect(mapStateToProps, { getEngineers })(Table);
