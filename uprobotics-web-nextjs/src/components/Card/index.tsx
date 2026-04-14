import { Button, Card } from 'react-bootstrap'
import { FaRobot, FaYoutube } from 'react-icons/fa'
import { FiCpu } from 'react-icons/fi'
import { SiArduino } from 'react-icons/si'

interface CardUpProps {
  span?: string
  colorSpan?: string
  src: string
  title: string
  text: string
  button?: string
  variant?: string
}

function getCardIcon(span: string, color: string) {
  switch (span) {
    case 'file-icons:arduino':
      return <SiArduino color={color} />
    case 'clarity:bug-line':
      return <FaRobot color={color} />
    default:
      return <FiCpu color={color} />
  }
}

const CardUp = ({
  span = 'file-icons:arduino',
  colorSpan = '#000',
  src,
  title,
  text,
  button = 'Ver tutorial',
  variant = 'primary'
}: CardUpProps) => {
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '30px',
        marginTop: '1em',
        marginBottom: '2em',
        height: '580px'
      }}
    >
      <Card.Img
        style={{
          width: '100%',
          height: '290px',
          borderRadius: '30px 30px 0px 0px'
        }}
        variant="top"
        src={src}
      />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title
          style={{
            margin: '.5rem auto',
            fontWeight: 'bold',
            color: '#575e75',
            width: 'calc(100% - 3rem)'
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              marginRight: '0.5rem',
              verticalAlign: 'middle'
            }}
          >
            {getCardIcon(span, colorSpan)}
          </span>
          {title}
        </Card.Title>
        <Card.Text
          style={{
            margin: 'auto',
            width: 'calc(100% - 3rem)',
            fontSize: '.875rem',
            color: '#575e75'
          }}
        >
          {text}
        </Card.Text>
      </Card.Body>
      <Button
        variant={variant}
        style={{ marginLeft: '25%', marginBottom: '1em', width: '50%' }}
      >
        <FaYoutube aria-hidden="true" style={{ marginRight: '10px' }} />
        {button}
      </Button>
    </Card>
  )
}

export default CardUp
