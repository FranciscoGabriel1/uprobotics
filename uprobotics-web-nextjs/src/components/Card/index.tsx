import { Card, Button } from 'react-bootstrap'

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
      <Card
        style={{
          width: '100%',
          borderRadius: '30px',
          marginTop: '1em',
          marginBottom: '2em',
          height: '500px',
        }}
      >
        <Card.Img
          style={{
            width: '100%',
            height: '220px',
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
        </Card.Body>
        <Button variant={variant} style={{ marginLeft: '25%', marginBottom: '1em', width: '50%'}}>
          <i className="uil uil-youtube" style={{ marginRight: '10px' }}></i>
          {button}
        </Button>
      </Card>
  
  )
}

export default CardUp
