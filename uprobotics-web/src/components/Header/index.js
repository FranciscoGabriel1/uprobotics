import React from "react";
import { Link, NavLink } from "react-router-dom";
import imagem from "../../assets/img/doguito.svg";
// import "../../assets/css/componentes/cabecalho.css";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <a>
            <img src="../../images/logo.svg" alt="up.robotics" />
          </a>
        </Link>
        <nav>
          <NavLink exact to="/" activeClassName={"active"}>
            <a>Home</a>
          </NavLink>

          <NavLink to="/create" activeClassName={"active"}>
            <a>Criar</a>
          </NavLink>

          <NavLink to="/tutorial" activeClassName={"active"}>
            <a>Tutorias</a>
          </NavLink>

          <NavLink to="/about" activeClassName={"active"}>
            <a>Sobre</a>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
