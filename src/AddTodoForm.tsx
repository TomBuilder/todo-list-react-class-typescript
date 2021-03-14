import React from 'react'

interface Props {
   addTodo: AddTodo;
}

interface State {
   text: string;
}

export class AddTodoForm extends React.Component<Props> {
   state: State = { text: '' };

   render() {
      return (
         <form >
            <input type="text"
               value={this.state.text}
               onChange={e => {
                  this.setState({ text: e.target.value });
               }}
            />
            <button type="submit"
               onClick={e => {
                  e.preventDefault();
                  this.props.addTodo(this.state.text);
                  this.setState({ text: '' });
               }}
            >
               Add Todo
         </button>
         </form >
      )
   }
}