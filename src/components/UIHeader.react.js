import React, { Component } from 'react';

class UIHeader extends Component {
    render() {
        return (
            <div className="header header-map">
                <div className="header--title">{this.props.title}</div>
                <div className="header--subtitle">{this.props.subtitle}</div>
            </div>
        );
    }
}

export default UIHeader;
