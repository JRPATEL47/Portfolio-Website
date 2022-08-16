import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
