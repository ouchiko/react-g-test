import React, { Component } from 'react';

import UICategoryItem from './UICategoryItem.react';


class UICategoryBar extends Component {

    constructor(props, context) {
        super(props, context);
        console.dir(props);
        this.state = {
            categoryItems: null
        };

    }

    componentDidMount() {
        if (this.props.categories.data && this.props.categories.data.length) {
            const items = this.props.categories.data.map((item) => {
                return <UICategoryItem data={item} key={item.id}/>;
            });
            console.log(items);
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
