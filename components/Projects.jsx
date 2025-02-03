export default function Projects({ projects }) {
  return (
    <section id='projects'>
      <h2 id='project_tittle'>Projects</h2>
      <div className='projects-container'>
        {projects.map((project) => (
          <div key={project.id} className='project-card'>
            <img src={project.img.src} alt={project.img.alt} />
            <h3>{project.title}</h3>
            <p>
              <strong>Tecnologías:</strong> {project.tecnolgies}
            </p>
            <p>{project.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
