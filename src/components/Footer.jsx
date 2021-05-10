import React from 'react';
import propTypes from 'prop-types';

function Footer(props) {

    let footerStyle = {

        position: 'sticky',
        width: '100%',
        top: '80vh',
        backgroundColor: 'black',
        color: 'white',
        minHeight: '80px'
    };
    return (

        <footer className="text-center" style={footerStyle}>
            <h4>{props.title}</h4>
            <p>Copyright &copy; TodosList - 2021</p>
        </footer>

    );
}

export default Footer;

Footer.propTypes = {

    title: propTypes.string
}
Footer.defaultProps = {

    title: 'Footer'
}