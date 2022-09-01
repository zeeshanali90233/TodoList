import React,{Component,compose} from 'react'


export class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            text: [],
        }
    }
    //Handling change
    previousDefault(e){
        e.previousDefault();
        return e;
    }

    newText(e){
        let newText=e.target.value;
        return {text:newText};
    }

    handleChange=compose(this.setState,this.newText,this.previousDefault);

    render(){
        return(
            <>
            <input type="text" placeholder='Enter a text' value={this.state.text} onChange={this.handleChange}/>
            <h1>Input Text: {this.state.text}</h1>
            </>
        );
    }
}
export default MyComponent;