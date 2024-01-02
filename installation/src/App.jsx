import { Home } from "./pages/Home.jsx"
import { Contact } from "./pages/Contact.jsx"
import { Single } from "./pages/Single.jsx"
import { NotFound } from './pages/NotFound.jsx'
import { useHashNavigation } from "./hooks/useHashNavigation.js"




function App() {

  const { page } = useHashNavigation()
  const pageContent = getPageContent(page)

  return <>
    <h1>React.js : Blog</h1>
    <p>Page : {page}</p>
    <p>
      <a href="#">Home</a>
      <a href="#post">Article</a>
      <a href="#contact">Contact</a>
    </p>
    {pageContent}
  </>
}


function getPageContent(page) {
  if (page === 'home') {
    return <Home />
  }
  if (page === 'contact') {
    return <Contact />
  }
  if (page === 'post') {
    return <Single />
  }
  return <NotFound page={page} />

}
export default App

