import React, { Component } from 'react';

import '../css/Button.css';

class UIButton extends Component {
    render() {
        return (
            <button onClick={this.props.reloader}>{this.props.title}</button>
        );
    }
}

export default UIButton;
