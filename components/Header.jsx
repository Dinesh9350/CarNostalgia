import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
      <Container>
        <Link to='/'>
          <Navbar.Brand>Car Nostalgia</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            {/* <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/buy'>
              Buy Car
              {/* <Link to='/buy'>Buy Car</Link> */}
            </Nav.Link>
            <Nav.Link as={Link} to='/sell'>
              Sell Car {/* <Link to='/sell'>Sell Car</Link> */}
            </Nav.Link>
            <Nav.Link as={Link} to='/support'>
              Support {/* <Link to='/sell'>Sell Car</Link> */}
            </Nav.Link>
            <Nav.Link as={Link} to='/login'>
              Login{/* <Link to='/login'>Login</Link> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
