// import styles from './styles.module.scss'

import { SubscribeButtonCustom } from './style'
import  Link  from 'next/link'
export function SubscribeButton({label="Veja como funciona", route="/tutorial"}) {
  return (
    <Link href={route}>
      <a>
        <SubscribeButtonCustom type="button">
            {label}
        </SubscribeButtonCustom>
      </a>
    </Link>
  )
}
