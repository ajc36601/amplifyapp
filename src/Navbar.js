import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Navigationbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              style={{background: "White"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Col>
          <Col xs="auto">
            <Button variant="outline-success" type='submit'>Search</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Navigationbar;
