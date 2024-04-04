import React from "react";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const Color = (WrappedComponent) => {       //the WrappedComponent aka Home and ListTodo us the input currently

    const colorRandom = getRandomColor();
    return(props) => (                      //needs props since the props is all the props of Home and ListTodo, whatever we input (a whole component), we need to output exactly it 
        <div
        style={{color: colorRandom}}
        >
            <WrappedComponent {...props}/>
        </div>
    )
    

}

export default Color