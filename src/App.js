import './App.css';
import Navbar from './components/Navbar/Navbar'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills';
import Blogs from './components/blogs/Blogs';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Skills />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
