// import styles from './styles.module.scss'

import { SubscribeButtonCustom } from './style'
import  Link  from 'next/link'
export function SubscribeButton() {
  return (
    <Link href="/tutorial">
      <a>
        <SubscribeButtonCustom type="button">
            Veja como funciona
        </SubscribeButtonCustom>
      </a>
    </Link>
  )
}
