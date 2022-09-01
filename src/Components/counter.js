import React , {Component, useState}from 'react'
import '../App.css';

export class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    render(){
        return(
            
            <div className='container text-center bg-primary my-3 rounded-circle'>
                <h1>Counter</h1>
                <br />
                <h2>{this.state.count}</h2>

                <button className='mx-2 mb-1 pb-1 rounded-circle' onClick={()=>{this.setState({count: this.state.count + 1})}}>Increment</button>
                <button className='mb-1 pb-1 rounded-circle' onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
            </div>
        );
    }
}

export default CounterClass;