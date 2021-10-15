import { Row, Col, Container } from 'react-bootstrap'

import { WorkstationStyle, OutputCode, GridStyled } from './style'

const Workspace = () => {
  return (
    <>
      {/* <main>
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
      </main> */}

<Container><div dangerouslySetInnerHTML={{ __html: "<iframe src='https://workstation-ecru.vercel.app/' style='margin:0; padding:0; width:100%; height:800px;' />"}} /></Container>


    </>
  )
}
export default Workspace
