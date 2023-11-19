
import './App.css'
import About from './components/about/About';
import Choose from './components/choose/Choose';
import Features from './components/features/Features';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Stats from './components/stats/Stats';

function App() {


  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Features/>
    <Menu/>
    <Choose/>
    <Stats/>
    <Gallery/>
    </>
  )
}

export default App
