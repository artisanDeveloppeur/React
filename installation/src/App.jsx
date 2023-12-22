import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { useEffect, useState } from "react"


function App() {

  const [showInput, setShowInput] = useState(true)


  return <>
    <h1>React.js : hook useEffect</h1>
    <div className="container my-3 stack">
      <Checkbox
        id="titleshow"
        checked={showInput}
        onChange={setShowInput}
        label="Afficher le champ titre"
      />

      {showInput && <EditTitle />}
    </div>
  </>
}

function EditTitle() {
  const [title, setTitle] = useState('')
  const [firtsName, setFirstname] = useState('')

  useEffect(() => {
    const originalTitle = document.title
    return () => {
      document.title = originalTitle
    }
  }, [])

  useEffect(() => {
    console.log(title)
    document.title = title
  }, [title]);

  return <div className="vstack gap-2">
    <Input
      placeholder="Modifier le titre"
      value={title}
      onChange={setTitle}
    />
    <Input
      placeholder="Prénom"
      value={firtsName}
      onChange={setFirstname}
    />
  </div>
}
export default App
