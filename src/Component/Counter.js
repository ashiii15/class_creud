import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, deleteItem, editItem } from "../Store/TodoAction";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { name: "" },
    };
  }
  editHandler = (id, name) => {
    this.setState({
      item: { id, name },
    });
  };
  render() {
    const addItem = () => {
      if (this.props.itemsData.find((item) => item.id === this.state.item.id)) {
        this.props.editData(this.state.item);
      } else {
        this.props.addItemData(this.state.item);
      }
      this.setState({
        item: { name: "" },
      });
    };
    return (
      <>
        <input
          type="text"
          value={this.state.item.name}
          onChange={(e) =>
            this.setState({
              item: { ...this.state.item, name: e.target.value },
            })
          }
        ></input>
        <p>{this.state.item.name}</p>
        <button onClick={addItem}>Add</button>
        <ul>
          {this.props.itemsData.map((item) => {
            return (
              <li key={item.id}>
                {item.name}
                <button onClick={() => this.props.deleteData(item.id)}>
                  delete
                </button>
                <button onClick={() => this.editHandler(item.id, item.name)}>
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemData: (val) => dispatch(addItem(val)),
    deleteData: (id) => dispatch(deleteItem(id)),
    editData: (obj) => dispatch(editItem(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
