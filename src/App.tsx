import React from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    text: 'Frühstück',
    complete: false
  },
  {
    text: 'Staubsaugen',
    complete: true
  }
]

interface State {
  todos: Todo[];
}

export class App extends React.Component<{}, State> {
  state: State = { todos: initialTodos };

  toggleTodo = (selectedTodo: Todo) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  }

  addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <AddTodoForm addTodo={this.addTodo} />
      </>
    );
  }
}
export default App;