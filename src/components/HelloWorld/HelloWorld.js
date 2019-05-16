import React, { Component } from 'react';
import './HelloWorld.scss';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        };
    }

    handleAddCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleAddName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        const { count, name } = this.state;
        return (
            <div className="Hello">
                <a>Totle clicked:
                    <b>{ count }</b>
                </a>
                <button type="button" onClick={ this.handleAddCount }>Click me</button>
                Please Add Your Name:
                <input
                    type="text"
                    value={ name }
                    onChange={ this.handleAddName }
                />
                Your Name is: {name}
            </div>
        );
    }
}

export default HelloWorld;
