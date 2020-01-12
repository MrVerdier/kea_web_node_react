import React from 'react'

export default class ButtonNew extends React.Component {
    render() {
        console.log(this.props.children)
        const { children, customStyle } = this.props
        return(
                <button style={customStyle}>{children}</button>
        )
    }
}