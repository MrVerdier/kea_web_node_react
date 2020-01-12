import React from 'react'

export default class ButtonWithChild extends React.Component {
    render() {
        console.log(this.props.children)
        const { children, informButtonPage } = this.props
        return(
                <button onClick={() => informButtonPage("Button with child was clicked")}>{children}</button>
        )
    }
}