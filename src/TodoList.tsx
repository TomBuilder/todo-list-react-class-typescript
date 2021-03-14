import React from 'react'
import { TodoListItem } from './TodoListItem'

interface Props {
   todos: Todo[];
   toggleTodo: ToggleTodo;
}

export class TodoList extends React.Component <Props> {
   render() {
      return (
         <ul>
            {this.props.todos.map(todo => (
               <TodoListItem key={todo.text} todo={todo} toggleTodo={this.props.toggleTodo} />
            ))}
         </ul>
      )
   }
}