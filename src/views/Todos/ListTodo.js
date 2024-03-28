import React from "react";
import './ListTodo.scss'
import './AddTodo'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component{

    state={
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Coding '},
            {id: 'todo3', title: 'Sleeping'},
        ]
    }

    addNewTodo = (todo) => {
        this.setState({     //resetting the state of parent (the listTodos)
            listTodos: [...this.state.listTodos, todo]
        })

    }


    render(){
        let {listTodos} = this.state;
        return(
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-todo-content">
                {listTodos && listTodos.length > 0 &&
                    listTodos.map((listTodo, index) => {
                        return(
                            <div key={listTodo.id} className="todo-child">
                                <span>{index + 1} - {listTodo.title} </span>
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </div>
                            )
                        }
                    )
                }

                

                </div>
            </div>
        )
    }
}

export default ListTodo