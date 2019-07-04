import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <div>
        <div>
            <Link to="/home" className="Nav">Home</Link>
            <Link to="/about" className="Nav">About us</Link>
            <Link to="/contact" className="Nav">Contact</Link>
        </div>
    </div>
);
export default Navigation;
