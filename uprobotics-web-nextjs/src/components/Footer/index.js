import { CustomFooter } from '../../layout'
import { Col, Row, Container } from 'react-bootstrap'
const Footer = () => {
  return (
    <>
      <CustomFooter>
        <Container>
          <Row>
            <Col sm={6}>
              <h4 className="footer-title">Robótica Desplugada...</h4>
              <div class="languages">
                <span
                  class="iconify"
                  data-icon="twemoji:flag-for-flag-brazil"
                  data-width="30"
                  data-height="40"
                ></span>
                <span className="city"> Manaus-AM, BRASIL</span> <i class=""></i>
              </div>
              <div class="social-media">
                <a href="" class="sm-link">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="" class="sm-link">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="" class="sm-link">
                  <i class="bx bxl-facebook-square"></i>
                </a>
                <a href="" class="sm-link">
                  <i class="bx bxl-youtube"></i>
                </a>
              </div>
            </Col>
            <Col sm={2} className="links">
              <ul>
                <p>Instituições</p>

                <li>
                  <a href="https://ufam.edu.br/" target="_blank">
                    UFAM
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://icomp.ufam.edu.br/" target="_blank">
                    iComp
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://ppgi.ufam.edu.br/" target="_blank">
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
                    target="_blank"
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
                    target="_blank"
                  >
                    Blockly
                  </a>
                </li>
                <li>
                  <a
                    href="https://cyberbotics.com/"
                    target="_blank"
                  >
                    Webots
                  </a>
                </li>
                <li>
                  <a
                    href="https://robotbenchmark.net/"
                    target="_blank"
                  >
                    Robotbenchmark
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tinkercad.com/"
                    target="_blank"
                  >
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
            <Col md={{ span: 3, offset: 0 }}>
              {' '}
              <img src="../../images/logo-white.svg" alt="upRobotics" />
            </Col>
          </Row>
        </Container>
      </CustomFooter>
    </>
  )
}
export default Footer
