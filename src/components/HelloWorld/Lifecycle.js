import React from 'react';
import PropTypes from 'prop-types';
import './HelloWorld.scss';

const LifeCycle = ({ count, name }) => (
    <div className="Hello">
        <div className="Hello-Text">
            <span>Totle clicked: <b>{count}</b></span>
        </div>
        <div className="Hello-Text">
            <span>Your Name is: {name}</span>
        </div>
    </div>
);

LifeCycle.propTypes = {
    count: PropTypes.number,
    name: PropTypes.string
};

export default LifeCycle;
