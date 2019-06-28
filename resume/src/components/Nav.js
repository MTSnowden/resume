import React, { Component } from 'react'
// import { Nav } from 'react-router-dom'
// import Bootstrap from 'bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css";

export default class Nav extends Component {
    componentDidMount() {
        console.log('Loading Nav Component...')
    }
    render() {
        return (
            <div>
             <h3>This is the Nav Component</h3>
            </div>
            // <div>
            // <Nav variant="tabs" defaultActiveKey='./body'>
            // <Nav.Item>
            //     <Nav.Link href="/home">Home</Nav.Link>
            // </Nav.Item>
            // <Nav.Item>
            //     <Nav.Link href="./experience">Experience</Nav.Link>
                
            // </Nav.Item>
            // <Nav.Item>
            //     <Nav.Link href="./portfolio">Portfolio</Nav.Link>
            // </Nav.Item>
            // </Nav> 
            // </div>
          
        )
    }
}
