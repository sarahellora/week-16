import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import ScrollButton from './ScrollButton';

const NavBar = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        {/* using the "as" prop to render the Link used by react router */}
          <Navbar.Brand as={Link} to="/">All Books</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to ="/addBook">Add A Book</Nav.Link>
            </Nav>
        </Container>
        <ScrollButton/>
      </Navbar>
    </>
  );
}

export default NavBar;