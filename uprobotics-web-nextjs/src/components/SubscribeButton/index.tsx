import { SubscribeButtonCustom } from './style'

interface SubscribeButtonProps {
  label?: string
  route?: string
}

export function SubscribeButton({
  label = 'Programar um robô',
  route = '/create'
}: SubscribeButtonProps) {
  return <SubscribeButtonCustom href={route}>{label}</SubscribeButtonCustom>
}
