import React, { Component } from "react";
import "./HelloWorld.scss";

export class HelloWorld extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			name: ''
		};
	}

    addCount = () => {
        this.setState({
	      	count: this.state.count + 1
	    });
    };

    addName = (event) => {
    	this.setState({
	      	name: event.target.value
	    });
    }

    render() {
    	const { count, name } = this.state;
        return (
           <div className="Hello">
           		<a>Totle clicked: <b>{count}</b></a>
               	<button onClick={this.addCount}>Click me</button>
               	Please Add Your Name:
               	<input type="text" value={name} onChange={this.addName}/>
               	Your Name is: {name}
           </div>
        )
    }
}

export default HelloWorld;
