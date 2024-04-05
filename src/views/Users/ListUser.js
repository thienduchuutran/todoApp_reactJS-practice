import React from "react";
import axios from "axios";
import './ListUser.scss'
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"; //if you wanna redirect to a new page, you need this

class ListUser extends React.Component{
    state ={
        ListUser: []
    }

    componentDidMount(){    //a life cycle of React, render() goes first, then componentDidMount()
        axios.get('https://reqres.in/api/users?page=1')     //JavaScript Promise
        .then(res => {
            this.setState({
                ListUser: res && res.data && res.data.data ? res.data.data : []
            })
        })

    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }


    render(){
        let {ListUser} = this.state //taking the list out from object above
        return(
            <div className="list-user-container">
                <div className="title">
                    Fetch list user
                </div>

                <div className="list-user-content">
                    {
                        ListUser && ListUser.length > 0 &&
                        ListUser.map((user, index) => {
                            return(
                                <>
                                    <div 
                                        className="child" 
                                        key={user.id}
                                        onClick={()=>this.handleViewDetailUser(user)}
                                        style={{cursor: 'pointer'}}
                                    >
                                        {index+1} - {user.first_name}  {user.last_name}
                                    </div>

                                </>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default withRouter(ListUser)