import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LifeCycle from './Lifecycle';
import { countIncrement, addName } from '../../actions/hello-world-actions';


class HelloWorld extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        count: PropTypes.number,
        name: PropTypes.string
    };

    handleAddCount = () => {
        const { count, dispatch } = this.props;
        return dispatch(countIncrement(count));
    };

    handleAddName = event => this.props.dispatch(addName(event.target.value));

    render() {
        const { count, name } = this.props;
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

const mapStateToProps = ({ helloWorld: { count, name } }) => ({ count, name });

export default connect(mapStateToProps)(HelloWorld);
