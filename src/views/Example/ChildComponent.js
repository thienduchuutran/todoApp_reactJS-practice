import React from "react";
import './Demo.scss'
class ChildComponent extends React.Component {

    state ={
        showJobs: false,
    }

    handleOnOff = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDelete = (job) => {
        this.props.deleteAJob(job)                  //receiving the props from parent
    }
    
    render(){
        let {arrJobs} = this.props;                 //receiving the props from parent / cứ thấy this.props là đang hứng từ parent
        let {showJobs} = this.state;

        return(
            <> 
                {showJobs === false ? 
                <div>
                    <button
                        style={{color: 'red'}}
                        className="btn-show"
                        onClick={() => this.handleOnOff()}>
                        Show
                    </button>
                </div>

                :
                    <>
                        <div className="jobs-list">
                            {
                            arrJobs.map((item, index) => {
                                return(
                                    <div key={item.id}> 
                                        {item.id} - {item.title} - {item.salary} <></> <button onClick={()=>this.handleDelete(item)}>x</button>
                                    </div>
                                )
                            })}
                        </div>
                        <div><button onClick={() => this.handleOnOff()}>Hide</button></div>  
                    </>
                }       
            </>
        );
    }

}

// const ChildComponent = (props) => {
//         let {arrJobs} = props;
//         return(
//             <> 
//             {
//                 arrJobs.map((item, index) => {
//                     if(item.salary >= 5000){
//                         return(
//                             <div key={item.id}> 
//                                 {item.title} - {item.salary} k
//                             </div>
//                             )
//                         }
//             })
//             }               
//             </>
//         );
// }

export default ChildComponent;