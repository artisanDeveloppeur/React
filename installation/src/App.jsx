import { useState } from "react"


function App() {

  const [isTermAccepted, setIsTermAccepted] = useState(false)

  return <>
    <h1>React.js</h1>
    <form >
      <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
      <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
    </form>
  </>
}

function CGUCheckbox({ checked, onCheck }) {
  return <div>
    <label>
      <input type="checkbox"
        onChange={(e) => onCheck(e.target.checked)}
        checked={checked} />
      Accepter les conditions d'utilisations
    </label>
  </div>
}

export default App
