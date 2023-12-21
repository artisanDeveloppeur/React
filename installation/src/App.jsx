import { useState } from "react"


function App() {
  //    <h2>Approche controlée </h2>
  /*
    const [firstName, setFirstName] = useState('John Doe')
  
    const handleChange = (e) => {
      setFirstName(e.target.value)
    }
  
    const reset = () => { setFirstName('') }
  */

  //<h2>Approche non controlée </h2>
  /*
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
  */

  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const [checked, setChecked] = useState(true)
  const toggleCheck = () => {
    setChecked(!checked)
  }

  return <>
    <h1>React.js</h1>
    {/* 
    <h2>Approche controlée </h2>
    <form>
      <label>FirstName</label>
      <input type="text" name="firstName"
        value={firstName} onChange={handleChange} />
      {firstName}
      <button onClick={reset} type="button">Reset</button>
    </form>
    */}

    {/* <h2>Approche non controlée</h2> */}
    {/* 
    <form onSubmit={handleSubmit}>
      <label>FirstName</label>
      <input type="text" name="firstName" defaultValue="default" />
      <button>Envoyer</button>
    </form>
    */}
    <form >
      <label>FirstName</label>
      {/*<input type="text" name="firstName" value={value} onChange={handleChange} />*/}
      <textarea value={value} onChange={handleChange} />
      <input type="checkbox" checked={checked} onChange={toggleCheck} />
      {/*{checked && <button>Envoyer</button>} */}
      <button disabled={!checked}>Envoyer</button>
    </form>
  </>

}

export default App
