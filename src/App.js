import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
        <Route path='/my-portfolio' element={<Layout/>}>
          <Route exact index element={<Home/>}/>
          <Route exact path='about' element={<About/>}/>
          <Route exact path='projects' element={<Projects/>}/>
          <Route exact path='contact' element={<Contact/>}/>
        </Route>
    </Routes>
    </>
  );
}

export default App;
