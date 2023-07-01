import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [hoverHamburger, setHoverHamburger] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowMenu(!showMenu);
  };

  const handleHamburgerMouseEnter = () => {
    setHoverHamburger(true);
  };

  const handleHamburgerMouseLeave = () => {
    setHoverHamburger(false);
    setShowMenu(false);
  };

  const handleCreateAccount = () => {
    // Redirecionar para o Google
    window.location.href = "https://www.google.com";
  };

  return (
    <nav>
      <div className="logo">
        <img src="/img/logo.png" alt="Logo da Loja" />
        <h1>Geek Journal</h1>
      </div>
      <ul className="categorias">
        <div
          className={selectedCategory === "Categorias" ? "active" : ""}
          onClick={() => handleCategoryClick("Categorias")}
        >
          <a className="item--categoria">Categorias</a>
        </div>
        <li>Favoritos</li>
        <li>Minha Estante</li>
      </ul>
      <ul className="acoes">
        <li className="sacola">
          <img src="/img/icone-sacola.svg" alt="Ícone da Sacola" />
          <span>Minha Sacola</span>
        </li>
        <li className={`usuario ${showUserOptions ? "active" : ""}`}>
          <img
            src="/img/icone-usuario.svg"
            alt="Ícone do Usuário"
            onClick={setShowUserOptions}
          />
          {showUserOptions && (
            <ul className="user-options">
              <li onClick={handleCreateAccount}>Criar</li>
              <li>Entrar</li>
            </ul>
          )}
        </li>
      </ul>
      <div
        className={`menu-hamburguer ${showMenu || hoverHamburger ? "open" : ""}`}
        onMouseEnter={handleHamburgerMouseEnter}
        onMouseLeave={handleHamburgerMouseLeave}
      >
        <div className="hamburguer-line"></div>
        <div className="hamburguer-line"></div>
        <div className="hamburguer-line"></div>
        {showMenu && (
          <ul className="menu-categorias">
            <li>MANGÁS</li>
            <li>HQS</li>
            <li>DIDÁTICOS</li>
            <li>COLECIONÁVEIS</li>
            <li>PRE-VENDAS</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
