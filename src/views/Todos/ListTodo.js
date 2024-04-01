import React from "react";
import './ListTodo.scss'
import './AddTodo'
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
// import { toast } from 'react-toastify';

class ListTodo extends React.Component{

    state={
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Coding '},
            {id: 'todo3', title: 'Sleeping'},
        ],

        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        this.setState({     //resetting the state of parent (the listTodos)
            listTodos: [...this.state.listTodos, todo]
        })
    }

    deleteItem = (listTodo) => {
        let currList = this.state.listTodos
        currList = currList.filter((item) => item.id !== listTodo.id)
        this.setState({
            listTodos: currList
        })
        toast.success("Deleted...")
    }

    cancelItem = (listTodo) => {
        this.setState({
            editTodo: ''
        })
        toast.success("canceled...")
    }

    editItem = (listTodo) => {
        let {editTodo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0; 

        //save
        if(isEmptyObj === false && editTodo.id === listTodo.id){
            let listTodosCopy = [...listTodos]

            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex(item => item.id === listTodo.id);

            //Update object's name property.
            listTodosCopy[objIndex].title  = editTodo.title

            this.setState({
                listTodos: listTodosCopy, //update the original listTodos with the new copied one
                editTodo: '',
            })
            toast.success('Saved the edit!')

            return;
        }

        //edit
            this.setState({
                editTodo: listTodo
            })
        
    }

    handleOnChangeEditTodo = (event) => {  //avoid modifying directly the state
        let editTodoCopy = {...this.state.editTodo};    //copy what we have so far in the editTodo object to the new one
        editTodoCopy.title = event.target.value         //updating the new one based on what we inputting
        this.setState({
            editTodo: editTodoCopy
        })
    }



    render(){
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;        //searched gg, check if an OBJECT is empty

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
                                {isEmptyObj === true ?              //checking if clicked on the edit button yet
                                <span>
                                    {index + 1} - {listTodo.title}
                                </span>       
                                :
                                <>
                                    {editTodo.id === listTodo.id ?  //checking to only change the clicked item
                                        <span>{index + 1} - <input 
                                            value={editTodo.title} 
                                            type="text"
                                            onChange={(event)=>this.handleOnChangeEditTodo(event)}
                                        />
                                        </span>
                                    :
                                    <span>
                                        {index + 1} - {listTodo.title} 
                                    </span>
                                    }
                                </>
                                
                                }
                                
                                
                                    <button 
                                        onClick={()=>this.editItem(listTodo)}
                                        className="edit"
                                    >
                                        {isEmptyObj === false && editTodo.id === listTodo.id  ? ' Save' : ' Edit'}
                                    </button>                                

                                

                                {isEmptyObj === false && editTodo.id === listTodo.id  ?
                                <button 
                                    className="cancel" 
                                    onClick={()=>this.cancelItem(listTodo)}
                                >
                                    Cancel
                                </button>
                                :
                                <button 
                                    className="delete" 
                                    onClick={()=>this.deleteItem(listTodo)}
                                >
                                    Delete
                                </button>
                                }  
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