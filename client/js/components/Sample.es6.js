import React, { Component, PropTypes } from 'react'

export default class Sample extends Component {
    render() {
        const {} = this.props;
        return (
            <div>
                <div style={STYLES}>HOT MODULE RELOADING WORKS NOW</div>
                <div>WHAYTASDTASTdsaf</div>
            </div>
        )
    }
}

Sample.PropTypes = {
    changeText : PropTypes.func.isRequired,
    text       : PropTypes.string.isRequired,
    readOnly   : PropTypes.bool
};

Sample.defaultProps = {
    readOnly: false,
    changeText: () => {}
};

const STYLES = {
    color: 'pink'
}
