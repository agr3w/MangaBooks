import './rodape.css'

const Rodape = () => {
    return (
        <footer className="rodape">
  <h2 className="rodape__titulo">Grupo Geek</h2>

  {/* Lista Educação */}
  <ul className="lista-rodape">
    <li className="lista-rodape__titulo">Mangás</li>
    <li className="lista-rodape__item">
      <img src="img/Geek point.jpg" alt="logo da casa do código" className='img-roda'/>
      <a href="#" className="lista-rodape__link">Geek Point</a>
    </li>
    <li className="lista-rodape__item">
      <img src="img/Panini.jpg" alt="logo da Caelum" className='img-roda'/>
      <a href="#" className="lista-rodape__link">Panini</a>
    </li>
  </ul>

  {/* Lista Educação Online */}
  <ul className="lista-rodape">
    <li className="lista-rodape__titulo">HQs</li>
    <li className="lista-rodape__item">
      <img src="img/panini.jpg" alt="logo da casa do código" className='img-roda'/>
      <a href="#" className="lista-rodape__link">Panini Comics</a>
    </li>
    <li className="lista-rodape__item">
      <img src="img/Nerdz.png" alt="logo da Alura empresas" className='img-roda'/>
      <a href="#" className="lista-rodape__link">Nerdz</a>
    </li>
    <li className="lista-rodape__item">
      <img src="img/Comix.png" alt="logo da Alura LATAM" className='img-roda'/>
      <a href="#" className="lista-rodape__link">Comix</a>
    </li>
  </ul>

  {/* Lista Comunidade */}
  <ul className="lista-rodape">
    <li className="lista-rodape__titulo">Comunidade</li>
    <li className="lista-rodape__item">
      <img src="img/Discord.png" alt="logo da Hipsters Tech" className='img-roda'/>
      <a href="#" className="lista-rodape__link">Discord</a>
    </li>
    <li className="lista-rodape__item">
      <img src="img/Telegram.png" alt="logo da Scuba Dev" className='img-roda'/>
      <a href="#" className="lista-rodape__link">Telegram</a>
    </li>
  </ul>
</footer>

    )
}

export default Rodape