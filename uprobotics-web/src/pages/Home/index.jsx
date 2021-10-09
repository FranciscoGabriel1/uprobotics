import React from "react";
// import ListaCategorias from '../components/ListaCategorias'
// import ListaPost from '../components/ListaPost'
import section1 from "../../assets/images/section-1.svg";
import section2 from "../../assets/images/section-2.svg";
import section3 from "../../assets/images/section-3.svg";
import section4 from "../../assets/images/section-4.svg";
import sparkles from "../../assets/images/sparkles.svg";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import "../home.css";
const Home = () => {
  return (
    <>
    <main>
      <section className="hero">
        <div class="row container" >
          <div class="hero-content-wrap">
            <h1 class="title primary-title">IMAGINE UM LUGAR…</h1>
            <p class="hero-description">
              …onde você possa pertencer a um clube escolar, um grupo de gamers,
              ou uma comunidade artística mundial. Onde você e alguns amigos
              possam passar um tempo juntos. Um lugar que torna fácil conversar
              todos os dias e socializar com mais frequência.
            </p>

            <div class="hero-btn-group">
              <a href="#" class="btn btn-large btn-light">
                Download for Windows
              </a>
              <a href="#" class="btn btn-large btn-light">
              Open Discord in your browser
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--AQUI COMOEÇA A SEGUNDA SEÇÃO--> */}

      <section class="collaboration">
        <div class="row container">
          <img src={section1} alt="" class="grid-image" />
          <div class="text-group">
            <h2 class="title secondary-title">
              Crie um espaço controlado por convite onde você se sinta em casa
            </h2>
            <p>
              Os servidores Discord são organizados em canais com tópicos para
              vocês colaborarem, compartilharem ou simplesmente falarem do dia
              sem entupir um chat geral.
            </p>
          </div>
        </div>
      </section>

      <svg
        class="wave"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          class="wave-path"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>

      {/* <!--AQUI COMEÇA A TERCEIRA SEÇÃO--> */}
      <section class="voice-channel">
        <div class="row container">
          <img src={section2} alt="" class="grid-image order-2" />
          <div class="text-group order-1">
            <h2 class="title secondary-title">Para poucos e para muitos</h2>
            <p>
              Organize qualquer comunidade com ferramentas de moderação e acesso
              personalizado a membros. Dê poderes especiais aos membros, monte
              canais privados e muito mais.
            </p>
          </div>
        </div>
      </section>

      <svg
        class="wave wave-inverted"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          class="wave-path"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>

      {/* <!--AQUI COMEÇA A QUARTA SEÇÃO--> */}
      <section class="moderation-tools">
        <div class="row container">
          <img src={section3} alt="" class="grid-image order-2" />
          <div class="text-group order-1">
            <h2 class="title secondary-title">
              TECNOLOGIA DE CONEXÃO CONFIÁVEL
            </h2>
            <p>
              Voz e vídeo de baixa latência, para você conversar como se
              estivesse na mesma sala. Dê um joinha por vídeo, veja amigos
              transmitirem a jogatina do dia ou junte uma galera pra desenhar na
              tela compartilhada.
            </p>
          </div>
        </div>
      </section>

      <svg
        class="wave"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          class="wave-path"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="currentColor"
        ></path>
      </svg>

      {/* <!--AQUI COMEÇA A QUINTA SEÇÃO--> */}
      <section class="video-call">
        <div class="row container">
          <div class="text-group">
            <h2 class="title secondary-title">
              TECNOLOGIA DE CONEXÃO CONFIÁVEL
            </h2>
            <p>
              Voz e vídeo de baixa latência, para você conversar como se
              estivesse na mesma sala. Dê um joinha por vídeo, veja amigos
              transmitirem a jogatina do dia ou junte uma galera pra desenhar na
              tela compartilhada.
            </p>
          </div>
          <img src={section4} alt="" class="grid-image" />
        </div>
      </section>

      {/* <!--SEÇÃO DOWNLOAD--> */}
      <section class="download">
        <div class="row container remove-grid">
          <img src={sparkles} alt="" class="sparkles" />
          <h2>Ready to start your journey?</h2>
          <a href="#" class="btn btn-large btn-brand">
            <i class="bx bx-donwload"></i> Download for Windows
          </a>
        </div>
      </section>
      <Footer/>
    </main>
   </>
  );
};

export default Home;
