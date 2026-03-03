
import React from 'react';
// import styles from './styles.module.scss'

import { SubscribeButtonCustom } from './style'
import  Link  from 'next/link'
export function SubscribeButton({label="Programar um robô", route="/create"}) {
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
