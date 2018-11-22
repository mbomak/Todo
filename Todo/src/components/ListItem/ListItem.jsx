import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Checkbox from 'material-ui/Checkbox';

// import components

import './ListItem.css';

const ListItem = ({
    className,
    id,
    text,
    date,
    checked,
    handleCheck
}) => (
    <div className={cn('list-item', className)}>
        <div className="list-item__wrap">
            <span>{date}</span>
            <span>{text}</span>
        </div>
        <Checkbox
            className="list-item__checkbox"
            id={id}
            checked={checked}
            onCheck={handleCheck}
        />
    </div>
);

ListItem.defaultProps = {
    className: '',
    id: 0,
    text: '',
    date: '',
    checked: false,
    handleCheck: () => {},
};

ListItem.propTypes = {
    className: PropTypes.string,
    id: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.string,
    checked: PropTypes.bool,
    handleCheck: PropTypes.func,
};

export default ListItem;
