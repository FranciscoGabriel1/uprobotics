import React from 'react'
import Head from 'next/head'
import { Introduction, TabStyle } from '../../layout'
import { Row, Col, Container, Tab, Tabs, Card } from 'react-bootstrap'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>

      <Introduction textAlign={'center'}>
        <h1>Sobre o UpRobotics</h1>
        <Container>
          <p>
            O "Up" vem do termo Unplugged Robotics ("Robótica desplugada"), isto
            é, uma estratégia de ensino de robótica bem sucedida, que não
            necessita da utilização de um robô físico. O UpRobotics é um artefato
            de inspiração em pesquisas científicas sobre educação, estratégias e
            softwares educacionais.
          </p>
        </Container>
      </Introduction>

      <Introduction textAlign={'left'}>
        <Container>
          {' '}
          <Row>
            <Col>
              <p>
                Com o UpRobotics, você pode programar seus próprios robôs,
                testá-los, aprimorar seus algoritmos, sem ter
                a necessidade de compreender a sintaxe das linguagens de
                programação textuais como Python e C, por exemplo. A linguagem
                visual é convertida para linguagens que o robô irá entender.
              </p>
              <p>
                UpRobotics foi feito para o exercício do pensamento
                computacional, além de ajudar os jovens a aprender a pensar de
                forma criativa, raciocinar sistematicamente e trabalhar de forma
                colaborativa, habilidades essenciais no mundo moderno.
              </p>
              <p>
                A capacidade de codificar programas de computador é uma parte
                importante da alfabetização na sociedade atual. Quando as
                pessoas aprendem a codificar com o Up, aprendem estratégias
                importantes para resolver problemas, projetar projetos e
                comunicar ideias.
              </p>
            </Col>
            <Col sm={6}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SweWjKrH0Oc?list=PLIE3otGP5p5ek1E3bPlphaan8RxRBo61d"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>

        <Container>
          <TabStyle textAlign={'left'}>
            <Tabs
              defaultActiveKey="project"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="project" title="Projeto">
                <Card body>
                  O UpRobotics é fruto da dissertação de Mestrado do Aluno{' '}
                  <a
                    href="http://lattes.cnpq.br/6111525331943224"
                    target="_blank"
                  >
                    Francisco Gabriel Teixeira Marinho
                  </a>
                  , do{' '}
                  <a href="https://ppgi.ufam.edu.br/" target="_blank">
                    Programa de Pós-Graduação em Informática (PPGi)
                  </a>{' '}
                  no Instituto de Computação (iComp) na Universidade Federal do
                  Amazonas (UFAM), sobre orientação do professor{' '}
                  <a
                    href="http://lattes.cnpq.br/1132672107627968"
                    target="_blank"
                  >
                    Dr. Raimundo da Silva Barreto
                  </a>
                  . Esse projeto recebeu apoio financeiro da CAPES (Coordenação
                  de Aperfeiçoamento de Pessoal de Nível Superior).
                  <Row>
                    <Col>
                      <a href="https://www.gov.br/capes/pt-br" target="_blank">
                        <img
                          src="https://i.ibb.co/Rz9qdZ1/capes.png"
                          alt="capes"
                        ></img>
                      </a>
                      <a href="https://ufam.edu.br/" target="_blank">
                        <img
                          src="https://i.ibb.co/cvcV3Sn/ufam.png"
                          alt="ufam"
                        ></img>
                      </a>
                      <a href="https://icomp.ufam.edu.br/" target="_blank">
                        <img
                          src="https://i.ibb.co/HhcwVbp/icomp.png"
                          alt="icomp"
                        ></img>
                      </a>
                    </Col>
                    <Col></Col>
                  </Row>
                </Card>
              </Tab>
              <Tab eventKey="paper" title="Publicações">
                <Card body>
                  <ul>
                    <li>
                      <b>Artigo</b> "UpRobotics: Robótica Educacional Utilizando
                      Linguagem Visual Baseada em Blocos" apresentado no SBESC
                      2020, publicado{' '}
                      <a
                        href="https://sol.sbc.org.br/index.php/sbesc_estendido/article/view/13101"
                        style={{ color: '#0D85FE' }}
                        target="_blank"
                      >
                        <i class="uil uil-newspaper"></i>aqui
                      </a>
                    </li>
                    <li>
                      <b>Qualificação 2020 </b> intitulada "UpRobotics: Robótica
                      Educacional Utilizando Linguagem Visual Baseada em Blocos"
                    </li>
                  </ul>
                </Card>
              </Tab>
              <Tab eventKey="presentation" title="Palestra">
                <Card body>
                  {' '}
                  <ul>
                    <li>
                      <b>Minicurso:</b> "Construção de uma Linguagem Visual
                      Baseada em Blocos para o Ensino da Robótica" apresentado
                      na escola de Sistemas Embarcados do SBESC 2020, a playlist
                      das aulas está disponível no{' '}
                      <a
                        href="https://www.youtube.com/playlist?list=PLIE3otGP5p5ek1E3bPlphaan8RxRBo61d"
                        style={{ color: '#FF0000' }}
                        target="_blank"
                      >
                        {' '}
                        YouTube
                        <i class="uil uil-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </Card>
              </Tab>
              <Tab eventKey="software" title="Softwares utilizados">
                <Card body>
                  <Row>
                    <img
                      src="https://i.ibb.co/mSW7QT0/logo-vertical.png"
                      alt="blockly_img"
                      width="11%"
                      height="11%"
                    ></img>

                    <Col>
                      <a
                        href="https://developers.google.com/blockly"
                        target="_blank"
                      >
                        Blockly
                      </a>{' '}
                      é uma biblioteca que adiciona um editor de código visual a
                      aplicativos da web e móveis. O editor Blockly usa blocos
                      gráficos interligados para representar conceitos de código
                      como variáveis, expressões lógicas, loops e muito mais.
                      Ele permite que os usuários apliquem os princípios de
                      programação sem se preocupar com a sintaxe ou a
                      intimidação de um cursor piscando na linha de comando.
                      <hr />
                    </Col>
                  </Row>

                  <Row>
                    <img
                      src="https://i.ibb.co/1nQLDCX/webots.png"
                      alt="webots_img"
                      width="11%"
                      height="11%"
                    ></img>

                    <Col>
                      {' '}
                      <a href="https://cyberbotics.com/" target="_blank">
                        Webots
                      </a>{' '}
                      é um aplicativo de desktop de código aberto e
                      multiplataforma usado para simular robôs . Ele fornece um
                      ambiente de desenvolvimento completo para modelar,
                      programar e simular robôs. Ele foi projetado para um uso
                      profissional e é amplamente utilizado na indústria ,
                      educação e pesquisa . Cyberbotics Ltd. mantém Webots como
                      seu produto principal continuamente desde 1998.
                      <hr />
                    </Col>
                  </Row>

                  <Row>
                    <img
                      src="https://i.ibb.co/gR4jXXH/robotbenck-removebg-preview.png"
                      alt="webots_img"
                      width="11%"
                      height="11%"
                    ></img>

                    <Col>
                      {' '}
                      <a href="https://robotbenchmark.net/" target="_blank">
                        Robotbenchmark
                      </a>{' '}
                      é uma aplicação online baseada em Webots. Ele oferece uma
                      série de desafios de programação de robôs que abordam
                      vários tópicos em uma ampla gama de níveis de dificuldade.
                      Esses benchmarks são fornecidos gratuitamente como
                      simulações online, com base em uma pilha de software de
                      código aberto 100% gratuito. O desempenho alcançado pelos
                      usuários é registrado e exibido online.
                      <hr />
                    </Col>
                  </Row>

                  <Row>
                    <img
                      src="https://i.ibb.co/27ZF3G8/tinkercad.png"
                      alt="webots_img"
                      width="11%"
                      height="11%"
                    ></img>

                    <Col>
                      {' '}
                      <a href="https://www.tinkercad.com/" target="_blank">
                        TinkerCAD
                      </a>{' '}
                      é um aplicativo Web gratuito e fácil de usar que fornece a
                      projetistas e engenheiros a próxima geração de habilidades
                      fundamentais para inovação: projeto 3D, eletrônica e
                      codificação.
                    </Col>
                  </Row>
                </Card>
              </Tab>
            </Tabs>
          </TabStyle>
        </Container>
      </Introduction>
    </>
  )
}
