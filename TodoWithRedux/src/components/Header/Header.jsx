import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// import components

import './Header.css';

const Header = ({ className, title }) => (
    <header className={cn('header', className)}>
        <h1 className="header__title">{title}</h1>
    </header>
);

Header.defaultProps = {
    title: 'Welcome!!!'
};

Header.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};

export default Header;
