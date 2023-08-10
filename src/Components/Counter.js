import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        this.setState((prevstate,props) => ({
            count: prevstate.count+1
        }),()=>{
            console.log('this is',this.state.count)
        })
        //console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        //when this happens, React may group all the 5 calls into one, we need to change the object with a function
        //to not let this happen -----
        //                           |
        //                           |
        ///                          v
    }
    
    // increment(){
    //     this.setState({
    //         count: this.state.count+1
    //     },()=>{
    //         console.log('callback value',this.state.count)
    //     })
        //you can put a function here but since setState is an async function, it would render this func
        //before setState possibly works. now this might not be desired. so we have a callback in the set
        //State itself. 

        
    
    
  render() {
    return (
    <div>
      <div>
        Count - {this.state.count}
      </div>
      <button onClick={()=> this.incrementFive()}>Increment</button>
    </div>
    )
  }
}

export default Counter
