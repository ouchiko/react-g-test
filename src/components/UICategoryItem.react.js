import React, { Component } from 'react';


class UICategoryItem extends Component {
    constructor(props, context) {
        super(props, context);
        console.dir(props);
        this.state = {
            categoryItems: null
        };

    }

    render() {
        return (
            <div className="category--item">
                {this.props.data.title}
            </div>
        );
    }
}

export default UICategoryItem;
