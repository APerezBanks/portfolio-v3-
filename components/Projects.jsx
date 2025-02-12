export default function Projects({ projects }) {
  return (
    <section id='projects'>
      <h2 id='project_tittle'>Projects</h2>
      <div className='projects-container'>
        {projects.map((project) => (
          <div key={project.id} className='project-card'>
            <img src={project.img.src} alt={project.img.alt} />
            <h3>{project.title}</h3>
            <p className='tecnologias'>{project.tecnolgies}</p>
            <p className="descripcion_p">{project.text}</p>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
