import React, { PureComponent } from 'react'

export default class Pcomp extends PureComponent {
    constructor(){
    super()
    this.state={
       count:2}
    }
  render() {
    return (
<div>
   <h1>"This is pure component increement button":</h1> {this.state.count}
        <br>
        </br>
        <button className='btn1' onClick={()=>this.setState({count:4})}>Increment</button>
      </div>
    )
  }
}