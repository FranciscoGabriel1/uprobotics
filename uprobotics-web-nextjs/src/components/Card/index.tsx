import { Card, Button } from 'react-bootstrap'
import { StyleCard } from './style'

const CardUp = ({
  span = 'logos:arduino',
  colorSpan = '#000',
  src,
  title,
  text,
  button = 'Ver tutorial',
  variant = 'primary'
}) => {
  return (
    <StyleCard>
      <Card
          style={{
          width: '100%',
          borderRadius: '30px',
          marginTop: '1em',
          marginBottom: '2em'
        }}
      >
        <Card.Img
          style={{ width: '100%', borderRadius: '30px 30px 0px 0px' }}
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
            <span className="iconify" data-icon={span} color={colorSpan}></span>
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
          <Button variant={variant} style={{ marginTop: '1em' }}>
            {button}
          </Button>
        </Card.Body>
      </Card>
    </StyleCard>
  )
}

export default CardUp
