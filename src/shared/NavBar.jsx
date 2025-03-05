import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const cartCount = useSelector(state => state.cart.count);
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={"/"} className='mx-3 text-decoration-none text-dark'>Home</NavLink> 
                        <NavLink to={"/cart"} className='mx-3 text-decoration-none text-dark'>Cart - {cartCount} -</NavLink>
                        <NavLink to={"/dashboard"} className='mx-3 text-decoration-none text-dark'>Dashboard</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;