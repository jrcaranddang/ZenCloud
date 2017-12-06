import React from 'react';
import {
    Nav, 
    Navbar, 
    NavItem } from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Nav>
                    <NavItem eventKey={1} href="#">WHATS NEW</NavItem>
                    <NavItem eventKey={2} href="#">ABOUT</NavItem>
                    <NavItem eventKey={3} href="#">DHARMA TALKS</NavItem>
                    <NavItem eventKey={4} href="#">ONLINE COURSES</NavItem>
                    <NavItem eventKey={5} href="#">CHANTING</NavItem>
                    <NavItem eventKey={6} href="#">TALKS FOR KIDS</NavItem>
                    <NavItem eventKey={7} href="#">SEARCH</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;
