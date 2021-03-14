import React from 'react';

interface Props {
   todo: Todo;
   toggleTodo: ToggleTodo;
}

export class TodoListItem extends React.Component<Props> {
   render() {
      return (
         <li>
            <label style={{ textDecoration: this.props.todo.complete ? 'line-through' : undefined }}>
               <input
                  type="checkbox"
                  readOnly
                  checked={this.props.todo.complete}
                  onClick={() => {
                     this.props.toggleTodo(this.props.todo);
                  }}
               /> {' '}
               {this.props.todo.text}
            </label>
         </li>
      );
   }
}