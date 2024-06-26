import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";


class DetailUser extends React.Component{

    state = {       //in order to render to UI, we need state and setState
        user: {}
    }
    async componentDidMount(){
        if(this.props.match && this.props.match.params){
            let id = this.props.match.params.id

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            }) 
        }
    }

    handleBackButton = () => {
        this.props.history.push('/user')            //directly redirect to the page we want 
    }

    render(){
        let {user} = this.state
        let isEmptyObj = Object.keys(user).length === 0; 

        return(
            <>
                {isEmptyObj === false &&
                <>
                    <div> User's name: {user.first_name} {user.last_name}</div>
                    <div> User's email: {user.email}</div>
                    <div> 
                        <img src={user.avatar} />
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={()=>this.handleBackButton()}
                        >
                             Back 
                        </button>
                    </div>
                </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);  //cover it with withRouter so we can get functions, parameters and everything out of DetailUser