//1.0.0 components

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Evenly distribute flex items
 *
 */
const FlexItem = (props) => {
    const { component: Component, children, ...others } = props;
    return (
        <Component className="weui-flex__item" {...others}>
            { children }
        </Component>
    );
};

FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    component: PropTypes.node
};

FlexItem.defaultProps = {
    component: 'div'
};

export default FlexItem;
