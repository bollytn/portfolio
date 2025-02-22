import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './containers/hero';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navbar';


function App() {

  return (
    <div className="App">

      {/* Particales js */}


      {/*navbar */}
      <Navbar />

      {/* main page content */}
      <HashRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
