import "./carrosel.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css';

const Carrossel = () => {
  return (
    <div className="sessao2">
      <section className="carrossel">
        <h2 className="carrossel__titulo">Novos Lançamentos</h2>
        <div className="carrossel__container">
          <Carousel
            interval={1000000}
            slidesToShow={3}
            variant="dark"
            className="swiper-container"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/ApacheKafka.jpg"
                alt="Livro sobre ApacheKafka e Springs boot da Alura books"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Liderança.jpg"
                alt="Livro sobre liderança em design da Alura books"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Javascript.jpg"
                alt="Livro sobre javascript assertivo da Alura books"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Guia Front-end.jpg"
                alt="Livro Guia Front-end"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Portugol.jpg"
                alt="Livro sobre Portugol"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Acessibilidade.jpg"
                alt="Livro Acessibilidade"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section className="carrossel">
        <h2 className="carrossel__titulo">Mais Vendidos</h2>
        <div className="carrossel__container">
          <Carousel
            interval={1000000}
            slidesToShow={3}
            className="swiper-container"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Nodejs.jpg"
                alt="Livro sobre ApacheKafka e Springs boot da Alura books"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Liderança.jpg"
                alt="Livro sobre liderança em design da Alura books"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Javascript.jpg"
                alt="Livro sobre javascript assertivo da Alura books"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Guia Front-end.jpg"
                alt="Livro Guia Front-end"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/ApacheKafka.jpg"
                alt="Livro sobre Node.js"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/Acessibilidade.jpg"
                alt="Livro Acessibilidade"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section className="card">
        <div className="card__descricao">
          <div className="descricao">
            <h3 className="titulo__estrela">★ ★ ★ ★ ★</h3>
            <h3 className="descricao__titulo">Autor do Mês</h3>
            <h2 className="descricao__titulo-livro">Tsugumi Ohba</h2>
            <p className="descricao__texto">
            Roteirista de mangá. Até agora, suas obras mais conhecidas 
            são Death Note, Bakuman e Platinum End.
            </p>
          </div>
          <img
            src="img/Escritora.jpg"
            className="descricao__imagem"
            alt="foto de Juliana Agarikov"
          />
        </div>

        <div className="card__botoes">
          <ul className="botoes">
            <li className="botoes__item">
              <img src="img/Favoritos.svg" alt="Favoritar livro" />
            </li>
            <li className="botoes__item">
              <img
                src="/img/icone-sacola.svg"
                alt="Adicionar no carrinho de compras"
              />
            </li>
          </ul>
          <a href="#" className="botoes__ancora">
            Saiba mais
          </a>
        </div>
      </section>
    </div>
  );
};

export default Carrossel;
