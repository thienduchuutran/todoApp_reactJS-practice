import React from "react";
import { toast } from 'react-toastify';

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
        if (!this.state.title){     //if undefined, null, empty => false
            toast.error('Empty title!')
            return
        }
        let todo = {
            id: Math.floor(Math.random()*1001),
            title: this.state.title
        }

        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })

        toast.success("Added succesfully!")

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