import React from "react";

class RevenueRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revenue: props.revenue
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.revenue.amount} {this.state.revenue.currency}</td>
        <td>{this.state.revenue.account}</td>
        <td>{this.state.revenue.source}</td>
        <td>{this.state.revenue.description}</td>
      </tr>
    );
  }
}

export default RevenueRow;
