import './App.css';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import data from './data';

function App() {
  return (
    <>
      <Main />
      <About />
      <Projects projects={data} />
      <Contact />
    </>
  );
}

export default App;
