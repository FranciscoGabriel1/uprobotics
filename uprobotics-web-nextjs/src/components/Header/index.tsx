import { Container, Nav, Navbar } from 'react-bootstrap'
import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <Navbar collapseOnSelect className="navcolor" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/logo-white.svg" alt="upRobotics" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Criar</Nav.Link>
              <Nav.Link href="/tutorial">Tutorial</Nav.Link>
              <Nav.Link href="/about">Sobre</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                eventKey={2}
                href="https://developers.google.com/blockly"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.ibb.co/XsVQHbF/logo-built-with-knockout.png"
                  width="80"
                  alt="Blockly"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  )
}
