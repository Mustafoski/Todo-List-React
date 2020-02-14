import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
// learning to use git from vscode
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: "wake up" },
        { id: 2, title: "make breakfast" }
      ],
      id: uuid(),
      item: "",
      editItem: false
    };
  }

  handleChange = e => {
    console.log("handleChange");
  };
  handleSubmit = e => {
    console.log("handleSubmit");
  };
  handleClearList = () => {
    console.log("clearList");
  };
  handleDelete = id => {
    console.log(`handle edit ${id}`);
  };
  handleEdit = id => {
    console.log(`edit edit ${id}`);
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleEdit={this.handleEdit}
            />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleClearList={this.handleClearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
