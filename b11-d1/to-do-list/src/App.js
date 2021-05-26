import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['treinar React', 'exaltar a beleza do React', 'falar do React para a familia', 'difundir a palavra do React a todas as pessoas'];

class App extends React.Component {
  render() {
    return (
    <ul>
      {Task('Aprender React')}
      {tasks.map((string) => Task(string))}
    </ul>
    )
  }
}

export default App;
