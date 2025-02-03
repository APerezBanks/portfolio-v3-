export default function About() {
  return (
    <div className='allaboutme'>
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam enim
        autem consequatur sapiente molestiae deleniti eaque amet minus, quidem
        quam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quibusdam enim autem consequatur sapiente molestiae deleniti eaque amet
        minus, quidem quam.
      </p>
      <div className='second'>
        <img src='desktop.jpg' alt=' foto de escritorio de trabajo' />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          enim autem consequatur sapiente molestiae deleniti eaque amet minus,
          quidem quam.
        </p>
      </div>
    </div>
  );
}
