import React, { Component } from 'react'

export default class Body extends Component {

    componentDidMount() {
        console.log('Loading Body Component...')
    }

    render() {
        return (
            <div>
                <h1>This is the body component.</h1>
            </div>
        )
    }
}
