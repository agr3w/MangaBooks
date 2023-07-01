import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <h2 className="banner__titulo">Já sabe por onde começar?</h2>
      <p className="banner__texto">
        Encontre em nossa estante o que precisa!
      </p>
      <input
        type="search"
        className="banner__pesquisa"
        placeholder="Qual será sua próxima leitura?"
      />
    </section>
  );
};

export default Banner;
