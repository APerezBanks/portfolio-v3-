import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // 📌 Importamos los iconos

export default function Contact() {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className='contact-links'>
        <a
          href='https://linkedin.com/in/tu-perfil'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='icon' /> Alex's LinkedIn
        </a>

        <a
          href='https://github.com/tu-usuario'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='icon' /> Alex's GitHub
        </a>

        <a href='mailto:alex@example.com'>
          <FaEnvelope className='icon' /> My Email
        </a>
      </div>
    </section>
  );
}
