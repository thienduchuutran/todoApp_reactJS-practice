import React from "react";
// import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Color from "../HOC/Color";
import logo from '../../assets/img/logo.jpg'
import { connect } from "react-redux";

class Home extends React.Component{
    
    // componentDidMount(){                    //automatically redirect
    //     setTimeout(() => {
    //         this.props.history.push('/todos')
    //     }, 2000);
    // }
    
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    render(){
        let listUser = this.props.dataRedux
        return(
            <>
                
                {/* <div>Home</div> */}
                <img style={{width: '300px', height: '300px', marginTop: '40px', borderRadius: '300px'}} src={logo}/>
                <div>
                    {listUser && listUser.length> 0 &&
                    listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}><button >X</button></span>  
                                  
                                
                            </div>
                        )
                    })
                    }
                    <span><button onClick={() => this.handleCreateUser()}>add new</button></span>
                </div>
            </>
        )
    }
}


//we need these 2 functions and the connection below to complete connecting react app to redux
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
    }
}
//when using withRouter (higher order component), it equips the component with more props
// export default withRouter(Home);  
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))  