import { Row, Col} from 'react-bootstrap'
import { WorkstationStyle, OutputCode, GridStyled } from './style'

const Workspace = () => {
  return (
    <>
      <main>
        <section>

        <GridStyled>
            <Row>
              <Col xl={8}>
                <WorkstationStyle id="blocklyDiv" />
              </Col>

              <Col xl={4}>
                <OutputCode id="codigogerado" />
              </Col>
            </Row>
        </GridStyled> 
        </section>
      </main>
    </>
  )
}
export default Workspace
