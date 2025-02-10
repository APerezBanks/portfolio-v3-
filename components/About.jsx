export default function About() {
  return (
    <div id='about' className='allaboutme'>
      <article className='aboutme'>
        <h2 className='sobre'>
          {' '}
          About <br /> me{' '}
        </h2>
        <div className='foto_desktop'>
          <img src='desktop.jpg' alt=' foto de escritorio de trabajo' />
        </div>
      </article>
      <p className='parrafada'>
        "Después de pasar una década en Manchester, UK, donde estudié Diseño de
        Sonido para videojuegos y trabajé en varios empleos, descubrí que mi
        verdadera pasión estaba en el código y el desarrollo Frontend.
        <br />
        <br />
        Al principio fui un poco autodidacta, pero al final me decidí a dar el
        salto y cambiar de carrera. En 2022, me uní al bootcamp de Full Stack de
        <a
          id='codenation'
          href='https://wearecodenation.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          Code Nation
        </a>{' '}
        para sumergirme de lleno en el mundo del desarrollo web."
      </p>

      <div className='second'>
        <img src='desktop.jpg' alt=' foto de escritorio de trabajo' />
        <p>
          "Soy un gran amante de la música, y no hay nada como los conciertos en
          directo.
          <br />
          <br />
          <a
            id='story'
            href='https://thestorysofarca.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <strong>The Story So Far</strong>
          </a>{' '}
          es mi banda favorita, siempre me llena de energía verlos en vivo.
          <br />
          <br />
          Además, practico crossfit para mantenerme activo, y cuando quiero
          relajarme, disfruto del manga y el anime.
          <br />
          <br />
          Y, por supuesto, no hay nada mejor que un buen latte para acompañar
          esos momentos de calma."
        </p>
      </div>
    </div>
  );
}
