import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Wrapper extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
};

export default Radium(Wrapper);
