// import components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import FooterSitemap from "./components/FooterSitemap"
import FooterCTA from "./components/FooterCTA"
import Jumbotron from './components/Jumbotron'
import Banner from './components/Banner'
import ComicCard from './components/ComicCard'
import Logo from './components/Logo'


// import data
import navItems from '../data/navItems'
import comics from "../data/comics"
import websiteSections from "../data/websiteSections"
import socialIcons from "../data/socialIcons"


function App() {
  return (
    <>
      <Header navItems={navItems} Logo={Logo} />
      <Main Jumbotron={Jumbotron} comics={comics} ComicCard={ComicCard} Banner={Banner} />
      <Footer FooterSitemap={FooterSitemap({ websiteSections })} FooterCTA={FooterCTA({ socialIcons })} />
    </>
  )
}

export default App