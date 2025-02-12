import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // 📌 Importamos los iconos

export default function Contact() {
  return (
    <section id='contact' className='contacMe'>
      <h2>Contact Me</h2>

      <div className='contact-links'>
        <a
          href='https://linkedin.com/in/tu-perfil'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='icon' /> LinkedIn
        </a>

        <a
          href='https://github.com/tu-usuario'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='icon' />
          GitHub
        </a>

        <a href='mailto:alex@example.com'>
          <FaEnvelope className='icon' />
          Email
        </a>
      </div>
    </section>
  );
}
