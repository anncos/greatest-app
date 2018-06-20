import React, { Component } from "react";
import { connect } from "react-redux";
import * as ducks from "../../ducks";

export class ItemsList extends Component {
  componentDidMount() {
    this.props.fetchItemsList();
  }

  render() {
    const { itemsList } = this.props;
    if (!itemsList) {
      return <div>Loading...</div>;
    }
    return <ul>{itemsList.map(item => <li>{item.name}</li>)}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    itemsList: ducks.itemsList.selectors.itemsList(state)
  };
};

const mapDispatchToProps = {
  fetchItemsList: ducks.itemsList.actions.fetchItemsList
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
