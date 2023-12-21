import { useState } from "react"

/*const todos = [
  'Presenter react',
  'Présenter le JSX',
  'Créer des composants'
]
*/
function App() {

  const [person, setPerson] = useState({
    firstName: 'John', lastName: 'Doe', age: 18

  })

  const incrementAge = () => {
    setPerson({ ...person, age: person.age + 1 })
  }
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    console.log('render')
    setCount(count + 1)
    //setCount((c) => c + 1)

  }

  return <>
    <h1>React.js</h1>
    <p>Age {person.firstName} : {person.age}</p>
    <button onClick={incrementAge}>Gagner une année</button>
    <p>Compteur : {count}</p>
    <button onClick={incrementCount}> Incrémenter {count}</button>


    {/*
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
    */}
  </>

}

export default App
