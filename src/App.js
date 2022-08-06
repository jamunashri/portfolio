import './App.css';
import Footer from './Footer';
import Navbar from './NavBar/index';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Projects from './Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="animation-container" id="home">
        <AboutMe />
      <Skills />
      <Projects />
      <Footer />
      </div>
    </div>
  );
}

export default App;
