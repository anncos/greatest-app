import React, { Component } from "react";
import { connect } from "react-redux";
import * as ducks from "../../ducks";

export class ItemsList extends Component {
  componentDidMount() {
    this.props.fetchItemsList();
  }

  render() {
    return <div>Heja!</div>;
  }
}

const mapDispatchToProps = {
  fetchItemsList: ducks.itemsList.actions.fetchItemsList
};

export default connect(null, mapDispatchToProps)(ItemsList);
