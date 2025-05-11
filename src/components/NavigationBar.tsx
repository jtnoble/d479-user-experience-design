import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BASE_URL } from '../config/constants';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href={BASE_URL} style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Taniti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href={BASE_URL} className="border-end px-3">Home</Nav.Link>
            <NavDropdown title="Visiting" id="basic-nav-dropdown" className="border-end px-3">
              <NavDropdown.Item as={Link} to="/entertainment">Entertainment</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lodging">Lodging</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transportation">Transportation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/grocery">Grocery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/restaurants">Restaurants</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sightseeing">Sightseeing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="border-end px-3">About</Nav.Link>
            <Nav.Link href="#faq" className="px-3">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;