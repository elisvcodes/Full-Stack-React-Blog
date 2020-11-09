import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
export default function MyNavbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={NavLink} to='/'>Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to='/addpost'>Add Post</Nav.Link>
                </Nav>

            </Navbar>
        </div>
    )
}
