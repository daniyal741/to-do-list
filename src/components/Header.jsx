
import React from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
function Header(props) {

    return (

        <ul class="nav">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">{props.title}</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
            </li>
        </ul>

    );
}

export default Header;

Header.propTypes = {

    title: propTypes.string
}
Header.defaultProps = {

    title: 'Header'
}