import React, { Component } from 'react'
import { Router, Link } from 'react-router-dom'
import { Jumbotron, Button } from 'react-bootstrap'
import './home.css'


export default class Home extends Component {

    componentDidMount() {
        console.log('Loading Home Component...')
    }

    render() {
        return (
            <Router> 
                <Jumbotron>
                {/* <img id="signature"></img> */}

                </Jumbotron>
                <Link to="./Experience">
                    <Button bsStyle="primary">About</Button>
                </Link>

            </Router>
                
            
        )
    }
}
