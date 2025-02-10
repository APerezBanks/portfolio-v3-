export default function Main() {
  return (
    <>
      <main className='main'>
        <div className='title'>
          <h1>Alejandro Pérez Banks</h1>
          <h3>{'Software Developer </> '}</h3>
        </div>

        <section className='main_section'>
          <img
            className='foto_perfil'
            src='fotoperfilColor.png'
            alt='foto de perfil de Alex'
          ></img>
          <p>
            <strong id='hi'>Hi!</strong> Soy Alex, un desarrollador con
            formación Full Stack, pero con una gran pasión por el Frontend.{' '}
            <br />
            Ubicado actualmente en la soleada ciudad de Benidorm <br />
            Aquí encontrarás mis proyectos más recientes y formas de
            contactarme. <br />
            <strong>
              ¡Explora, curiosea y si te gusta lo que ves, estaré encantado de
              conectar contigo!
            </strong>
          </p>
        </section>

        <nav className='navbar'>
          <a id='a-aboutme' href='#about'>
            about me
          </a>
          <a id='a-projects' href='#projects'>
            projects
          </a>
          <a id='a-contact' href='#contact'>
            contact
          </a>
        </nav>
      </main>
    </>
  );
}
