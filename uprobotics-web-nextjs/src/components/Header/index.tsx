import { SignInButtom } from '../SignInButton'
import { HeaderContainer, HeaderContent } from './style'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Nav, Navbar, Container } from 'react-bootstrap'

export function Header() {
  const router = useRouter()
  return (
    <HeaderContainer>
      <Navbar collapseOnSelect className="navcolor" expand="lg" variant="dark">
        <Container>
          <Link href="/">
            <Navbar.Brand href="/">
              <a>
                <img src="../../images/logo-white.svg" alt="upRobotics" />
              </a>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">
                <Nav.Link href="/">Home</Nav.Link>
              </Link>
              <Link href="/create">
                <Nav.Link href="/create">Criar</Nav.Link>
              </Link>
              <Link href="/tutorial">
                <Nav.Link href="/tutorial">Tutorial</Nav.Link>
              </Link>
              <Link href="/about">
                <Nav.Link href="/about">Sobre</Nav.Link>
              </Link>
            </Nav>
             <Nav>
           
              <Nav.Link eventKey={2} href="https://developers.google.com/blockly " target="_blank">
              <a><img src="https://i.ibb.co/XsVQHbF/logo-built-with-knockout.png" width="20%"  alt="googleBlockly_logo" /></a>
              </Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  )
}
