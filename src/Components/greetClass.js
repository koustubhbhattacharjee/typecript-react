import React, { Component } from 'react'
class Welcome extends Component {
    constructor(){
        super()
        this.state={
            message: 'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    render(){
        const {name} = this.props
        const { message }= this.state
        return( 
        <div>
            <h1>{message}</h1>
            <h1>{name}</h1>
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Welcome