import React, { Component } from 'react';

class UIProduct extends Component {
    render() {
        return (
            <div className="product">{this.props.product.title}</div>
        );
    }
}

export default UIProduct;
