import React from 'react';
import {Link} from 'react-router-dom';

export default function HelloWorld() {
    return (
        <div>
            <h1>HelloWorld</h1>
            <ul>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
}