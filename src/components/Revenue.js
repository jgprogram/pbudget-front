import React from "react";

class Revenue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null,
      account: "mBank",
      source: "Firma x"
    };
  }

  addNewRevenue = () => {
    console.log(JSON.stringify(this.state, null, 2));
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

  render() {
    const revenue = [
      {
        amount: 3250,
        account: "mBank",
        source: "Vattenfall"
      },
      {
        amount: 1200,
        account: "mBank",
        source: "Firma ZUS"
      }
    ];

    return (
      <div className="revenue-cmp">
        <h3>Revenue</h3>
        <table>
          <thead>
          <tr>
            <th>Amount</th>
            <th>Account</th>
            <th>Source</th>
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
              <button onClick={this.addNewRevenue}>+</button>
            </td>
          </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
        <div className="add-revenue">

        </div>
      </div>
    );
  }
}

export default Revenue;
