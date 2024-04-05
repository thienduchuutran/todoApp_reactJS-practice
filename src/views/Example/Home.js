import React from "react";
// import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Color from "../HOC/Color";

class Home extends React.Component{
    
    // componentDidMount(){                    //automatically redirect
    //     setTimeout(() => {
    //         this.props.history.push('/todos')
    //     }, 2000);
    // }
    

    render(){
        return(
            <div>Home</div>
        )
    }
}


//when using withRouter (higher order component), it equips the component with more props
// export default withRouter(Home);  
export default Color(Home)  