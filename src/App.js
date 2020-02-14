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

  handleChange(e) {
    console.log(hello);
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
