import React from 'react';

class SingleEngineer extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <div className="user_profile light-box-shadow">
                        <ul className="navbar">
                            <li className="navbar-list"> Jonathan Aurugai </li>
                            <li className="navbar-list"> <strong>Email:</strong> Jonathanaurugai@andela.com </li>
                            <li className="navbar-list"><strong>Location: </strong> Kigali </li>
                            <li className="navbar-list"> <strong>Cohort: </strong> Class 8 - KGL</li>
                        </ul>
                    </div>
                    <div className="dev-rating">
                        <table className=" table light-box-shadow">
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
                                <td className="table-col">04/11/2019</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                            </tr>
                            <tr className="table-row">
                                <td className="table-col">24/09/2019</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                                <td className="table-col">0.0</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SingleEngineer;