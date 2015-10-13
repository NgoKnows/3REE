import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
export default class Sample extends Component {
    render() {
        const {} = this.props;
        return (
            <div>This is a sample component</div>
        )
    }
}

Sample.PropTypes = {
    changeText : PropTypes.func.isRequired,
    text       : PropTypes.string.isRequired,
    readOnly : PropTypes.bool
};

Sample.defaultProps = {
    readOnly: false,
    changeText: () => {}
};

const STYLES = {};