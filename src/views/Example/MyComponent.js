import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponents from "./AddComponents";

class MyComponent extends React.Component{

    state={
        arrJobs: [
            {id: 'abc1', title: 'Developer', salary: '4000' },
            {id: 'abcw', title: 'Tester', salary: '3000' },
            {id: 'abc3', title: 'PM', salary: '7000' }
        ]
    }

    addNewJobs = (job) => {                                     //defining function and what it does
        this.setState({ 
            arrJobs: [...this.state.arrJobs,job]
        })
        console.log(job)
    }

    deleteAJob =(job)=>{                                        //defining function and what it does
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
    




    render(){
        return (
            <>
                <AddComponents
                    addNewJobs={this.addNewJobs}        //passing the props (which is a function) to child
                />


               <ChildComponent 
                    arrJobs = {this.state.arrJobs}      //passing the props (which is a function) to child
                    deleteAJob = {this.deleteAJob}
                />

            </>
        )
    }
}

export default MyComponent;