
import { Route, Router, Routes, useNavigate } from 'react-router';
import './App.css';
import { Home } from './Components/Home';
import { AboutMe } from './Components/AboutMe';
import { Contact } from './Components/Contact';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Education } from './Components/Education';
import { Certifications } from './Components/Certifications';

import { ArrowBack } from '@mui/icons-material';
function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <button onClick={() => navigate("/")} style={{ position: "absolute", top: '7rem', left: '7rem', backgroundColor: "#aea580", border: "none", color: "white", fontWeight: 'bolder', borderRadius: '3px' }}>
        <ArrowBack color='white'></ArrowBack>
      </button>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutMe />}></Route>
        <Route path='/education' element={<Education />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path='/certifications' element={<Certifications />}></Route>
      </Routes>

    </div>
  );
}

export default App;
