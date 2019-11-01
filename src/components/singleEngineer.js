import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEngineer } from "../actions/EngineerActions";

class SingleEngineer extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchEngineer()
    }
    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <div className="user-profile light-box-shadow">
                        <ul className="profile-bar">
                            <li className="profile-bar-item"> Jonathan Aurugai </li>
                            <li className="profile-bar-item"> <strong>Email:</strong> Jonathanaurugai@andela.com </li>
                            <li className="profile-bar-item"><strong>Location: </strong> Kigali </li>
                            <li className="profile-bar-item"> <strong>Cohort: </strong> Class 8 - KGL</li>
                        </ul>
                    </div>
                    <div className="dev-rating">
                        <table className=" table light-box-shadow avg">
                        <tbody>
                            <tr className="table-row">
                                <td className="table-col">-</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                            </tr>
                            <tr className="table-row-header">
                                <th className="table-col-header">Date</th>
                                <th className="table-col-header">Quality</th>
                                <th className="table-col-header">Quantity</th>
                                <th className="table-col-header">Communication</th>
                                <th className="table-col-header">Initiative</th>
                                <th className="table-col-header">Professionalism</th>
                                <th className="table-col-header">Integration</th>
                                <th className="table-col-header">Average Ratings</th>
                            </tr>
                            <tr className="table-row">
                                <td className="table-col sm">01/07/19</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                            </tr>
                            <tr className="table-row">
                                <td className="table-col sm">01/07/19</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                            </tr>
                            <tr className="table-row">
                                <td className="table-col sm">01/07/19</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                                <td className="table-col sm">0.0</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

SingleEngineer.propTypes = {
    fetchEngineer: PropTypes.func.isRequired,
  };

const mapStateToProps = state => ({
    Engineer: state.engineer,
  });

export default connect(mapStateToProps, { fetchEngineer })(SingleEngineer);