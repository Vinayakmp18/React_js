import React, { Component } from 'react'
import "./cp.css"

export default class App extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }
    handlePlus = ()=>{
        this.setState({count:this.state.count+1})
    }
    handleMinus =()=>{
        this.setState({count : this.state.count-1})
    }
    handleReset =()=>{
        this.setState({count:0})
    }
    render() {
    return (
      <div className='mainBlock'>
        <h1>{this.state.count}</h1>
        <div className='buttonBlock'>
            <button onClick={this.handlePlus}>+</button>
            <button onClick={this.handleMinus}>-</button>
            <button onClick={this.handleReset}>RESET</button>
        </div>
      </div>
    )
  }
}
