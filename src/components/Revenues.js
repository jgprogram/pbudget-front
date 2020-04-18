import React from "react";
import RevenueRow from "./RevenueRow";
import Revenue from "../model/Revenue";

class Revenues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 2000,
      account: "mBank",
      source: "Company x",
      description: "Salary",
      revenues: [
        new Revenue(3250, "mBank", "Vattenfall", "Salary"),
        new Revenue(1200, "mBank", "ZUS", "Refund")
      ]
    };
  }

  addNewRevenue = () => {
    const revenue = new Revenue(this.state.amount, this.state.account, this.state.source, this.state.description);
    this.setState({ revenues: [...this.state.revenues, revenue] });
  };

  updateAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  updateAccount = (event) => {
    this.setState({ account: event.target.value });
  };

  updateSource = (event) => {
    this.setState({ source: event.target.value });
  };

  updateDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    const revenueRows = this.state.revenues.map(revenue => <RevenueRow key={revenue.id} revenue={revenue}/>);

    return (
      <div className="revenue-cmp">
        <h3>Revenues</h3>
        <table>
          <thead>
          <tr>
            <th>Amount</th>
            <th>Account</th>
            <th>Source</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <input type="text" value={this.state.amount} onChange={this.updateAmount}/>
            </td>
            <td>
              <input type="text" value={this.state.account} onChange={this.updateAccount}/>
            </td>
            <td>
              <input type="text" value={this.state.source} onChange={this.updateSource}/>
            </td>
            <td>
              <input type="text" value={this.state.description} onChange={this.updateDescription}/>
            </td>
            <td>
              <button onClick={this.addNewRevenue}>+</button>
            </td>
          </tr>
          </thead>
          <tbody>
          {revenueRows}
          </tbody>
        </table>
        <div className="add-revenue">

        </div>
      </div>
    );
  }
}

export default Revenues;
