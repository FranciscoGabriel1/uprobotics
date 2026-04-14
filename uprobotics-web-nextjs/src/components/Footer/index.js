import { Col, Container, Row } from 'react-bootstrap'
import {
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'
import { CustomFooter } from '../../layout'

const Footer = () => {
  const externalLinkProps = {
    target: '_blank',
    rel: 'noreferrer'
  }

  return (
    <CustomFooter>
      <Container>
        <Row>
          <Col sm={6}>
            <h4 className="footer-title">Robótica Desplugada...</h4>
            <div className="languages">
              <FaMapMarkerAlt aria-hidden="true" />
              <span className="city"> Manaus-AM, BRASIL</span>
            </div>
            <div className="social-media">
              <span className="sm-link" title="Twitter">
                <FaTwitter aria-hidden="true" />
              </span>
              <span className="sm-link" title="Instagram">
                <FaInstagram aria-hidden="true" />
              </span>
              <span className="sm-link" title="Facebook">
                <FaFacebookSquare aria-hidden="true" />
              </span>
              <span className="sm-link" title="YouTube">
                <FaYoutube aria-hidden="true" />
              </span>
            </div>
          </Col>
          <Col sm={2} className="links">
            <ul>
              <p>Instituições</p>

              <li>
                <a href="https://ufam.edu.br/" {...externalLinkProps}>
                  UFAM
                </a>
              </li>
              <li>
                <a href="https://icomp.ufam.edu.br/" {...externalLinkProps}>
                  iComp
                </a>
              </li>
              <li>
                <a href="https://ppgi.ufam.edu.br/" {...externalLinkProps}>
                  PPGI
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={2} className="links">
            <ul>
              <p>Patrocínio</p>
              <li>
                <a
                  href="https://www.gov.br/capes/pt-br/acesso-a-informacao/institucional/historia-e-missao"
                  {...externalLinkProps}
                >
                  Capes
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={2} className="links">
            <ul>
              <p>Ferramentas</p>
              <li>
                <a
                  href="https://developers.google.com/blockly"
                  {...externalLinkProps}
                >
                  Blockly
                </a>
              </li>
              <li>
                <a href="https://cyberbotics.com/" {...externalLinkProps}>
                  Webots
                </a>
              </li>
              <li>
                <a href="https://robotbenchmark.net/" {...externalLinkProps}>
                  Robotbenchmark
                </a>
              </li>
              <li>
                <a href="https://www.tinkercad.com/" {...externalLinkProps}>
                  TinkerCAD
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="divider"></div>
        <Row>
          <Col md={6}>
            <a href="#" aria-label="Voltar ao topo">
              <FiArrowUp aria-hidden="true" />
            </a>
          </Col>
          <Col> &copy; Copyright 2026 | UpRobotics</Col>
        </Row>
      </Container>
    </CustomFooter>
  )
}

export default Footer
