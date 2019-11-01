import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableContent from './singleContent';
import { fetchEngineer, fetchRating } from '../actions/EngineerActions';

class SingleEngineer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      feedback: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const { fetchEngineer, fetchRating } = this.props;
    fetchEngineer(id);
    fetchRating(id);
  }

  openModal = (id) => {
    this.setState({ feedback: id });
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({ feedback: null });
  }

  handleRatings = (array) => {
    try {
      const items = [];
      if (array.length > 0 && array !== undefined) {
        array.map((engineer) => {
          const engineerRatings = {};
          engineerRatings.feedback = {};
          engineerRatings.id = engineer.id,
          engineerRatings.date = engineer.updatedAt.split('T')[0],
          engineerRatings.quality = engineer.quality.rate,
          engineerRatings.quantity = engineer.quantity.rate,
          engineerRatings.initiative = engineer.initiative.rate,
          engineerRatings.professionalism = engineer.professionalism.rate,
          engineerRatings.communication = engineer.communication.rate,
          engineerRatings.integration = engineer.integration.rate,
          engineerRatings.average = (
            (engineer.quality.rate
            + engineer.quantity.rate
            + engineer.initiative.rate
            + engineer.professionalism.rate
            + engineer.communication.rate
            + engineer.integration.rate)
            / 6
          ).toFixed(2),
          items.push(engineerRatings);
        });
      }
      return items;
    } catch (ex) {
    }
  }

   handleFeedback = (array) => {
     const id = this.state.feedback;
     console.log('This is id', id);
     try {
       const items = [];
       if (array.length > 0 && array !== undefined) {
         array.map((engineer) => {
           const feedback = {};
           feedback.id = engineer.id,
           feedback.quality = engineer.quality.feedback,
           feedback.quantity = engineer.quantity.feedback,
           feedback.initiative = engineer.initiative.feedback,
           feedback.professionalism = engineer.professionalism.feedback,
           feedback.communication = engineer.communication.feedback,
           feedback.integration = engineer.integration.feedback,
           items.push(feedback);
         });
       }
       return items.find((item) => item.id === id);
     } catch (ex) {
       console.log(ex);
     }
   }

  handleRate = (array) => {
    try {
      const items = [];
      if (array.length > 0 && array !== undefined) {
        array.map((engineer) => {
          const engineerRatings = {};
          engineerRatings.date = 'Average',
          engineerRatings.quality = engineer.quality,
          engineerRatings.quantity = engineer.quantity,
          engineerRatings.initiative = engineer.initiative,
          engineerRatings.professionalism = engineer.professionalism,
          engineerRatings.communication = engineer.communication,
          engineerRatings.integration = engineer.integration,
          engineerRatings.average = engineer.averageRating,
          items.push(engineerRatings);
        });
      }
      return items;
    } catch (ex) {
      console.log(ex);
    }
  }

  feed = (feedback) => {
    if (feedback !== undefined) {
      return (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={()=>this.closeModal()}>&times;</span>
            <table className="tab">
              <tbody>
                <tr>
                  <td>Quality</td>
                  <td>{feedback.quality}</td>
                </tr>
                <tr>
                  <td>Quantity</td>
                  <td>{feedback.quantity}</td>
                </tr>
                <tr>
                  <td>Communication</td>
                  <td>{feedback.communication}</td>
                </tr>
                <tr>
                  <td>Professionalism</td>
                  <td>{feedback.professionalism}</td>
                </tr>
                <tr>
                  <td>Integration</td>
                  <td>{feedback.integration}</td>
                </tr>
                <tr>
                  <td>Initiative</td>
                  <td>{feedback.initiative}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }


  render() {
    const { engineer } = this.props;
    const { user } = engineer;

    const columns = [
      'Date',
      'Quality',
      'Quantity',
      'Integration',
      'Initiative',
      'Communication',
      'Proffesionalism',
      'Average',
    ];
    const items = this.handleRatings(engineer.ratings);
    const average = this.handleRate(engineer.average);
    const feedback = this.handleFeedback(engineer.ratings);

    console.log('This is feedback', feedback);

    return (
      <>
        <div className="container">
          {this.feed(feedback)}
          <div>
            <ul className="profile-bar tableHeader light-box-shadow">
              <li className="profile-bar-item">{`${user.firstName} ${user.lastName}`}</li>
              <li className="profile-bar-item">
                {' '}
                <strong>Email:</strong>
                {user.email}
              </li>
              <li className="profile-bar-item">
                <strong>Role: </strong>
                {user.role}
              </li>
            </ul>
          </div>
          <div>
            <table className="table">
              <tbody>
                <TableContent data={average} />
                <tr>
                  {columns.map((column) => <th key={column}>{column}</th>)}
                </tr>
                <TableContent data={items} openModal={this.openModal} />
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

SingleEngineer.propTypes = {
  fetchEngineer: PropTypes.func.isRequired,
  fetchRating: PropTypes.func.isRequired,
};

const mapStateToProps = ({ engineer }) => ({
  engineer,
});

export default connect(mapStateToProps, { fetchEngineer, fetchRating })(SingleEngineer);
