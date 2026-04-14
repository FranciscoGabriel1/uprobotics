import Link from 'next/link'
import styled from 'styled-components'

export const SubscribeButtonCustom = styled(Link)`
  width: 260px;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: #2962ff;
  color: var(--white);
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
