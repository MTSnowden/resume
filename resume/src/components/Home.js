import React, { Component } from 'react'
import './home.css'

export default class Home extends Component {

    componentDidMount() {
        console.log('Loading Home Component...')
    }

    render() {
        return (
            <div className="home">
                {/* <h1>This is the home component.</h1> */}
                
                
                <img id="signature"></img>
                
            </div>
        )
    }
}
