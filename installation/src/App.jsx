import { useFetch } from "./hooks/useFetch"







function App() {

  // https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000
  const { loading, data, errors } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')


  return <>
    <h1>React.js : hook personnalisé</h1>
    {loading && <div>Chargement ...</div>}
    {data && <div>{JSON.stringify(data)}</div>}
  </>
}



export default App
