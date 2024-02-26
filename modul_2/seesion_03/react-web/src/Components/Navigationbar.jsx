import {Navbar,Container,Nav} from "react-bootstrap" 

const NavigationBar= ()=>{
    return(
    <Navbar variant="dark">
        <Container>
            <Navbar.Brand>PRATAMANIME</Navbar.Brand>
            <Nav>
            <Nav.Link href="#trending"> Trending</Nav.Link>
            <Nav.Link href="#update"> Terupdate</Nav.Link>
            </Nav>

        </Container>
    </Navbar>
    )
}

export default NavigationBar