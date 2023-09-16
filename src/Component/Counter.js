import React, { Component } from "react";
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "adil" },
        { id: 2, name: "sdf" },
      ],
      item: { name: "" },
    };
  }
  editHandler = (id, name) => {
    // console.log(e);
    this.setState({
      item: { id, name },
    });
  };
  render() {
    const addItem = () => {
      // console.log('btn click');
      if (this.state.item?.id) {
        this.setState({
          items: this.state.items.map((itm) => {
            if (itm.id === this.state.item.id) {
              itm.name = this.state.item.name;
            }
            return itm;
          }),
          item: {name:''}
        });
      } else {
        this.setState({
          items: [
            ...this.state.items,
            { id: this.state.items.length+1, name: this.state.item.name },
          ],
          item: { name: "" },
        });
      }
    };
    const deletHandler = (id) => {
      const deleteList = this.state.items.filter((listItem) => {
        return listItem.id !== id;
      });
      console.log(deleteList);
      this.setState({
        items: deleteList,
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
          {this.state.items.map((item) => {
            return (
              <li key={item.id}>
                {item.name}
                <button onClick={() => deletHandler(item.id)}>delete</button>
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
