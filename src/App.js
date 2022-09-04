import './App.css';
import Navbar from './components/Navbar/Navbar'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills';
import Blogs from './components/blogs/Blogs';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/projects/Projects';
import Blog1 from './components/blog/Blog1';
import Blog2 from './components/blog/Blog2';
import Acheivements from './components/acheivements/Acheivements';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Skills />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/1' element={<Blog1 />} />
        <Route path='/blogs/2' element={<Blog2 />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/achievement' element={<Acheivements />} />
      </Routes>
    </div>
  );
}

export default App;
