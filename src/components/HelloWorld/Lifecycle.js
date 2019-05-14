import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HelloWorld.scss';

export class LifeCycle extends Component {

    static propTypes = {
        count: PropTypes.number,
        name: PropTypes.string
    };

    /* eslint-disable no-console */
    componentWillReceiveProps(newProps) {
        console.log('LifeCycle -- newProps', newProps);
        console.log(' LifeCycle -- componentWillReceiveProps ');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifeCycle -- nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('shouldComponentUpdate -- LifeCycle');
        return true;
    }

    componentWillUpdate() {
        console.log('LifeCycle -- componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('LifeCycle -- componentDidUpdate');
    }

    render() {
        const { count, name } = this.props;
        return (
            <div className="Hello">
                <div className="Hello-Text">
                    <a>Totle clicked: <b>{count}</b></a>
                </div>
                <div className="Hello-Text">
                    <span>Your Name is: {name}</span>
                </div>
            </div>
        );
    }
}

export default LifeCycle;
