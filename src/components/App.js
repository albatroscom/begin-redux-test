import React, { Component } from 'react';
import CounterContainer from 'containers/CounterContainer';
import AppTemplate from './AppTemplate';
import Counter from './Counter';
import TodosContainer from 'containers/TodosContainer';
import Todos from './Todos';

class App extends Component {
  render() {
    return (
      <AppTemplate
        counter={<CounterContainer />}
        todos={<TodosContainer />}
      />
    );
  }
}

export default App;
