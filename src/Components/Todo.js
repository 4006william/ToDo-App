import React, {Component} from 'react'

class ToDo extends Component {
    state = {
        count: 0 ,
        inputText: '',
        todos: []
    }

    increase = () => {
        this.setState({count: this.state.count + 1})
    }


handleTextChange = (e) => {
    this.setState({inputText: e.target.value})
}

submitTodo = () => {
    const currentTodos = this.state.todos
    currentTodos.push(this.state.inputText)
    this.setState({todos: currentTodos})
}


    render() {
        return (
            <div>
                <input 
                    type='text' 
                    onChange={this.handleTextChange}
                    value={this.state.inputText}/>
            </div>
        )}
                }
    

export default ToDo