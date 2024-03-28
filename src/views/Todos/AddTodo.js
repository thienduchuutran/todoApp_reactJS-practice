import React from "react";

class AddTodo extends React.Component{

    state = {
        title: ''
    }

    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddNewTodo = () => {
        let todo = {
            id: Math.floor(Math.random()*1001),
            title: this.state.title
        }

        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }


    render(){

        let {title} = this.state;

        return(
            <div className="add-todo">
                <input 
                    value={title}
                    type="text" 
                    onChange={(event) => this.handleOnChange(event)}
                />
                <button
                    type="button" 
                    className="add"
                    onClick={this.handleAddNewTodo}
                >
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;