
import './App.css'
import About from './components/about/About';
import Choose from './components/choose/Choose';
import Features from './components/features/Features';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Offer from './components/offer/Offer';
import Stats from './components/stats/Stats';
import Team from './components/team/Team';

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
    <Offer/>
    <Team/>
    </>
  )
}

export default App
