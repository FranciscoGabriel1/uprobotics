import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { SignInButton } from './style'

export function SignInButtom() {
  const isUserLoggerIn = true

  return isUserLoggerIn ? (
    <SignInButton type="button" className={'signInButton'}>
      <FaGithub color="#04d361" />
      Professor
      <FiX color="#737380" className={'closeIcon'} />
    </SignInButton>
  ) : (
    <SignInButton type="button" className={'signInButton'}>
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </SignInButton>
  )
}
