// import components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

// import data
import comics from "../data/comics"
import ComicCard from "./components/ComicCard"

export default function App() {
  const { id, title, thumb, series } = comics
  return (
    <>
      <Header />
      <Main>
        <ComicCard uniqueKey={id} src={thumb} alt={title} {...{ series }} />
      </Main>
      <Footer />
    </>
  )
}