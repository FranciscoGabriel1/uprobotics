import { Row, Col, Container } from 'react-bootstrap'

import { WorkstationStyle, OutputCode, GridStyled, Iframe } from './style'

const Workspace = () => {
  return (
    <>
    <Iframe
              dangerouslySetInnerHTML={{
                __html:
                  "<iframe src='https://workstation-ecru.vercel.app/' style='margin:0; padding:3; width:100%; height:800px; overflow-y: hidden;' scrolling='no' />"
              }}
            />
      <main>
        <section>
          {/* <GridStyled>
            <Row>
              <Col xl={8}>
                <WorkstationStyle id="blocklyDiv" />
              </Col>

              <Col xl={4}>
                <OutputCode id="codigogerado" />
              </Col>
            </Row>
          </GridStyled> */}
          <GridStyled>
            
          </GridStyled>
        </section>
      </main>

      {/* <Container><div dangerouslySetInnerHTML={{ __html: "<iframe src='https://robotbenchmark.net/benchmark/pick_and_place/simulation.php' style='margin:0; padding:0; width:100%; height:800px;' />"}} /></Container>  */}
    </>
  )
}
export default Workspace
