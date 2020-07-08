import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import Modal from './Modal';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Reactを勉強する","Reactでなんか作る"],
      value: '',
    }
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      list: [
        ...this.state.list,
        this.state.value,
      ],
      value: '',
    });
  }
  handleClick = (event) => {
    let selectNumber = "";
    if (event.target.getAttribute('class') == "MuiButton-label") {
      selectNumber = event.target.parentNode.getAttribute('data-number');
    }else {
      selectNumber = event.target.getAttribute('data-number');
    }
    console.log(selectNumber);
  }
  render() {
    return (
      <div className="app">
        <h1>TODOアプリ</h1>
        <Form
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          list={this.state.list}
          handleClick={this.handleClick}
        />
        <Modal />
      </div>
    );
  }
}

export default App;
