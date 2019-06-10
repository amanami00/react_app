import React, { Component } from 'react';
import LifeCycle from './Lifecycle';

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
                <div className="Hello-Text">
                    <button
                        type="button"
                        className="Hello-Button"
                        onClick={ this.handleAddCount }
                    >
                        Click me
                    </button>
                </div>
                <div className="Hello-Text">
                    <span>Please Enter Your Name:</span>
                    <input
                        className="Hello-Text-Box"
                        type="text"
                        value={ name }
                        onChange={ this.handleAddName }
                    />
                </div>
                <LifeCycle count={ count } name={ name } />
            </div>
        );
    }
}

export default HelloWorld;
