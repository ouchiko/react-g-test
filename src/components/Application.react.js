import React, { Component } from 'react';
/* Components */
import UIHeader from './UIHeader.react.js';
import UICategoryBar from './UICategoryBar.react.js';
/* Helpers */
import Categories from '../helpers/Categories.js';
import Products from '../helpers/Products.js';
/* CSS */
import "../css/Application.css"

class Application extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: true // Are we in loading mode.
        };
    }

    componentDidMount() {
        console.log("Mounted");
        var categorySelector = new Categories();
        var productSelector = new Products();
        Promise.all([
            categorySelector.getCategories(),
            productSelector.getProducts()
        ]).then((data) => {
            this.setState({
                isLoading: false,
                categories: data[0],
                products: data[1]
            })
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <section className="define--loading">
                    LOADING MAP
                </section>
            );
        } else {
            return (
                <section appname={this.props.appName} appversion={this.props.appVersion}>
                    <UIHeader title="Category and Product Test" subtitle="React stuff for me"/>
                    <UICategoryBar categories={this.state.categories}/>
                </section>
            );
        }
    }
}

export default Application;
