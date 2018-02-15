import React, { Component } from 'react';


class UICategoryItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            categoryItems: null
        };
    }

    runFilter() {

        this.props.filterChange(this.props.item);
    }

    render() {
        //console.dir(this.props);
        return (
            <div className="category--item" onClick={this.runFilter.bind(this)}>
                {this.props.item.title}
            </div>
        );
    }
}

export default UICategoryItem;
