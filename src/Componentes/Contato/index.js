import './contato.css'

const Contato = () => {
    return (
      <section className="contato">
        <div className="contato__descricao">
          <h2 className="contato__titulo">Fique por dentro das novidades!</h2>
          <p className="contato__texto">Atualizações de e-books, novos mangás, promoções e outros.</p>
        </div>
        <input type="email" placeholder="Cadastre seu e-mail" className="contato__email" />
      </section>
    );
  };
  
  export default Contato;