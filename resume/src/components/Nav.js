import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

export default class Nav extends Component {
    componentDidMount() {
        console.log('Loading Nav Component...')
    }
    render() {
        return (
            <div>
                <h4>This is the Nav Component</h4>
                <BrowserRouter>
                 {/* <AboutMe /> */}
                 {/* <Education /> */}
                 {/* <Experience /> */}
                </BrowserRouter>
            </div>
        )
    }
}
