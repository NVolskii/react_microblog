import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header() {
    return (
        <Navbar bg="Light" sticky="Top" className="Header">
            <Container>
                <Navbar.Brand>
                    Microblog
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
