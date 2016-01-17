import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Sample extends Component {
    render() {
        return (
            <div>
                <div style={STYLES}>HOT MODULE RELOADING WORKS NOW</div>
            </div>
        )
    }
}

Sample.PropTypes = {
    changeText : PropTypes.func.isRequired,
    text       : PropTypes.string.isRequired,
    readOnly   : PropTypes.bool
}

Sample.defaultProps = {
    readOnly: false,
    changeText: () => {}
}

const STYLES = {
    color: 'pink',
    ':hover': {
        color: 'green'
    }
}

export default Radium(Sample);
