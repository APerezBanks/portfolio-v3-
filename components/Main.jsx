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
            “ lorem ipsum n ullamcorper odio. Vivamus risus urna, accumsan vitae
            tellus eget, laoreet commodo velit. Nam vitae volutpat augue. Proin
            facilisis dictum turpis, at bibendum purus ornare vel.
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
