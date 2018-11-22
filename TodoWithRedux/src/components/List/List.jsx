import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// import components
import ListItem from 'components/ListItem';

import './List.css';

const List = ({ className, items, handleCheck }) => (
    <div className={cn('list', className)}>
        {items
            && items.map(el => (
                <ListItem
                    key={el.id}
                    id={el.id}
                    className={cn(
                        'list__item',
                        {'checked': el.checked}
                    )}
                    date={el.date}
                    text={el.text}
                    checked={el.checked}
                    handleCheck={handleCheck}
                />
            ))
        }
    </div>
);

List.defaultProps = {
    className: '',
    items: [],
    handleCheck: () => {},
};

List.propTypes = {
    className: PropTypes.string,
    items: PropTypes.instanceOf(Array),
    handleCheck: PropTypes.func,
};

export default List;
