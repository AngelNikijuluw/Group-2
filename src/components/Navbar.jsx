import { Navbar, Container, Nav, NavDropdown,Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Login from "../pages/page4";
const Navs = () => {
  return (
    <Navbar style={{backgroundColor:"#434C77",zIndex: "3",position:"fixed",top:"0",width:"100%"}}>
        <img src={require('../image/logo.png')} style={{height:"auto", width:"100px",marginRight: "20px",marginLeft:"20px", position:"relative"}}/>
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
            </Nav>
            <Nav className="my-2 my-lg-0">
                <Nav className="mr-sm-2"/>
                <Nav.Link href="/Home" >Home</Nav.Link>
                <NavDropdown title="Event">
                <NavDropdown.Item href="/Course">Course</NavDropdown.Item>
                <NavDropdown.Item href="/Artikel">Artikel</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            <span>
            <NavLink to="/dashboard">
              <Button type="button" variant="dark">
                    Login
              </Button>
          </NavLink>
            </span>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
};

export default Navs;