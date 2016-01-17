import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Blah extends Component {
    render() {
        return (
            <div>
                <div style={STYLES}>This is the blah component! Woah!</div>
            </div>
        )
    }
}

const STYLES = {
    color: 'pink',
    ':hover': {
        color: 'green'
    }
}

export default Radium(Blah);
