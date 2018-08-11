import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Grid from './grid';

/**
 * Mobile grid system, typical use for 9 grid system. contain elements of `Grid`
 *
 */
export default class Grids extends Component {
    static propTypes = {
        /**
         * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
         *
         */
        data: PropTypes.array,
        onClickIndex: PropTypes.func,
    };

    static defaultProps = {
      data: [],
    };

    constructor(props) {
      super(props);
      this.handleClickIndex = this.handleClickIndex.bind(this);
    }

    handleClickIndex(index) {
      if (this.props.onClickIndex) {
        this.props.onClickIndex(index);
      }
    }

    renderData(data) {
        return data.map((item, i) => {
            return <Grid
                    key={i}
                    clickParam={i}
                    icon={item.icon}
                    label={item.label}
                    onClickIndex={this.handleClickIndex}
                    {...item}
                    />;
        });
    }

    render() {

        const {children, data, className, onClickIndex, ...others} = this.props;
        const cls = classNames({
            'weui-grids': true
        }, className);

        return (
            <div className={cls} {...others}>
            {data.length > 0 ? this.renderData(data) : children}
            </div>
        );
    }
};
