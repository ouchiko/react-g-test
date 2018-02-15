import React, { Component } from 'react';

import UICategoryItem from './UICategoryItem.react';


class UICategoryBar extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            categoryItems: null
        };

    }

    componentDidMount() {
        if (this.props.categories.data && this.props.categories.data.length) {
            const items = this.props.categories.data.map((item) => {
                //this.props.filterChange(item);
                return <UICategoryItem item={item} key={item.id} filterChange={this.props.filterChange.bind(this)}/>;
            });
            this.setState({
                categoryItems: items
            });
        }
    }

    render() {
        if (this.state.categoryItems) {
            return (
                <div className="category">
                    <div className="category--size">There are {this.state.categoryItems.length} items</div>
                    <div className="category--heading">
                        {this.state.categoryItems}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default UICategoryBar;
