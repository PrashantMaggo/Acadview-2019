import React, { Component } from 'react';

class Display extends Component{
    render(){
        console.log(this.props)
        return(
        <div>
            <div>My name is : {this.props.name} </div>
            <div>My age is : {this.props.age} </div>
            <div>My dob is : {this.props.dob} </div>
        </div>
        )
    }
}
export default Display;