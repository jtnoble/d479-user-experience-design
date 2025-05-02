import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Taniti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="border-end px-3">Home</Nav.Link>
            <NavDropdown title="Visiting" id="basic-nav-dropdown" className="border-end px-3">
              <NavDropdown.Item href="#action/3.1">Entertainment</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lodging</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Transportation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Grocery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Restaurants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Sightseeing</NavDropdown.Item>
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