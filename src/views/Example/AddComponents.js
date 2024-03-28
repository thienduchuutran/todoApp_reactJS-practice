import React from "react";

class AddComponents extends React.Component{

    state = {           //in the form 
        title: '',
        salary: ''
    }

    onChangetitleJob = (event) => {         //setState in the form 
        this.setState({
            title : event.target.value
        })
        
    }

    onChangeSalary = (event) => {           //setState in the form 
        this.setState({
            salary : event.target.value
        })
    }
    handleSubmit = (event) => {             //when click submit
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert('Missing info')
            return
        }
        this.props.addNewJobs({
            id: Math.floor(Math.random()*100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({                    //setState in the form 
            title: '',
            salary: ''
        })
    }

    render(){
        return(
            <form>
                <label htmlFor='fname'>job title:</label><br/>
                <input 
                    type='text' 
                    onChange={this.onChangetitleJob} 
                    value={this.state.title}
                />
                <br/>
                <label htmlFor='lname'>salary:</label><br/>
                <input type='text' onChange={this.onChangeSalary} value={this.state.salary}/><br/>
                <input type='submit'
                        onClick={(event)=>this.handleSubmit(event)}
                /><br/>
            </form>
        )
    }
}

export default AddComponents;