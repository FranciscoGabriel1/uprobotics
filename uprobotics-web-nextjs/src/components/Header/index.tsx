import { SignInButtom } from '../SignInButton'
import { HeaderContainer, HeaderContent } from './style'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter();
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <a><img src="../../images/logo.svg" alt="upRobotics" /></a>
        </Link>
        <nav>
          <Link href="/">
            <a  className={router.pathname == "/" ? "active" : ""}>Home</a>
          </Link>

          <Link href="/create">
            <a  className={router.pathname == "/create" ? "active" : ""}>Criar</a>
          </Link>
          <Link href="/tutorial" >
            <a className={router.pathname == "/tutorial" ?"active" : ""}>Tutoriais</a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "active" : ""}>Sobre</a>
          </Link>
        </nav>
        <SignInButtom />
      </HeaderContent>
    </HeaderContainer>
  )
}
