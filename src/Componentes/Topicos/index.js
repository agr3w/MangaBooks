import "./topicos.css";

const Topicos = () => {
  return (
    <section className="topicos">
      <h2 className="topicos__titulo">TÓPICOS VISITADOS RECENTEMENTE</h2>
      <ul className="topicos__lista">
        <li className="topicos__item">
          <a href="#" className="topicos__link">
            Action-figures
          </a>
        </li>
        <li className="topicos__item">
          <a href="#" className="topicos__link">
            Marvel
          </a>
        </li>
        <li className="topicos__item">
          <a href="#" className="topicos__link">
            DC comics
          </a>
        </li>
        <li className="topicos__item">
          <a href="#" className="topicos__link">
            Seinen 
          </a>
        </li>
        <li className="topicos__item">
          <a href="#" className="topicos__link">
            Shonen 
          </a>
        </li>
        <li className="topicos__item">
          <a href="#" className="topicos__link">
            Investigação
          </a>
        </li>
        <li className="topicos__item">
          <a href="#" className="topicos__link">
            Homem-aranha
          </a>
        </li>
        <li className="topicos__item">
          <a href="#" className="topicos__link">
            Berserk
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Topicos;
