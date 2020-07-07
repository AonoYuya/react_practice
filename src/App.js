import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    const list = ["Reactを勉強する","Reactでなんか作る"];
    
    return (
      <div>
        <h1>TODOアプリ</h1>
        <TodoList list={list} />
      </div>
    );
  }
}

export default App;
