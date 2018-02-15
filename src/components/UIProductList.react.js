import React, { Component } from 'react';

import UIProduct from "./UIProduct.react.js";

class UIProductList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            validProducts: null
        };
    }

    getValidProducts() {
        let baseFilterID = this.props.filter.id;

        console.dir(baseFilterID);

        let validProducts = this.props.products.data.filter((product) => {
            return (product.categories.some((category) => (category.id === baseFilterID)));
        });

        let productNodes = validProducts.map((product) => {
            return <UIProduct product={product} key={product.id} />;
        })

        console.dir(validProducts);

        this.setState({
            validProducts: productNodes
        });

    }

    componentDidUpdate(next, prev) {
        if (this.props.filter.id != next.filter.id) {
            this.getValidProducts();
        }
    }

    componentDidMount() {
        this.getValidProducts();
    }

    render() {
        return (<productlist>{this.state.validProducts}</productlist>);
    }
}

export default UIProductList;
