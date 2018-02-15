import React, { Component } from 'react';
/* Components */
import UIHeader from './UIHeader.react.js';
import UICategoryBar from './UICategoryBar.react.js';
import UIButton from './UIButton.react.js';
import UIProductList from './UIProductList.react.js';
/* Helpers */
import Categories from '../helpers/Categories.js';
import Products from '../helpers/Products.js';
/* CSS */
import "../css/Application.css"

class Application extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: true, // Are we in loading mode.
            hasFailedToLoad: false
        };
    }

    componentDidMount() {
        this.reloadFeeds();
    }

    reloadFeeds() {
        this.setState({
            isLoading: true,
            hasFailedToLoad: false
        });
        var categorySelector = new Categories();
        var productSelector = new Products();
        Promise.all([
            categorySelector.getCategories(),
            productSelector.getProducts()
        ]).then((data) => {
            this.setState({
                isLoading: false,
                categories: data[0],
                products: data[1],
                productFilter: data[0].data[0]
            });
        }).catch((exception) => {
            // Do some exception processing?
            this.setState({
                hasFailedToLoad: true
            })
        });
    }

    filterChange(filter) {
        console.dir(filter);
        this.setState({
            productFilter: filter
        });
    }


    render() {
        console.log("Render");
        if (this.state.hasFailedToLoad) {
            return (
                <section className="define--failed">
                    <li className="fa fa-exclamation-triangle"></li>
                    <div>Unable to load feeds.</div>
                </section>
            );
        } else if (this.state.isLoading) {
            return (
                <section className="define--loading">
                    <li className="fa-spin fa-circle-notch"></li>
                    <div>Loading site</div>
                </section>
            );
        } else {
            return (
                <section appname={this.props.appName} appversion={this.props.appVersion}>
                    <UIHeader title="Category and Product Test" subtitle="React stuff for me"/>
                    <UICategoryBar categories={this.state.categories} autoload="true" filterChange={this.filterChange.bind(this)}/>
                    <div className="products--container">
                        <UIProductList products={this.state.products} filter={this.state.productFilter}/>
                    </div>
                    <UIButton title="Reload feed" reloader={this.reloadFeeds.bind(this)}/>
                </section>
            );
        }
    }
}

export default Application;
