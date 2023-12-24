import { Input } from "./components/forms/Input.jsx";
//import { Checkbox } from "./components/forms/Checkbox.jsx";
import { useEffect, useRef, useState } from "react"


function App() {


  const prefixRef = useRef(null) // useMemo(() => ({ current: null }), [])
  const [prefix, setPrefix] = useState('')
  prefixRef.current = prefix

  useEffect(() => {

    const timer = setInterval(() => {
      console.log(prefixRef.current)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, []);

  return <>
    <h1>React.js : useRef</h1>
    <div className="container my-3 stack gap-2">
      <Input label={"prefix"} value={prefix} onChange={setPrefix} />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque mi nec lectus aliquet elementum. Pellentesque convallis sollicitudin neque non tempor. Quisque vel ipsum finibus, facilisis arcu nec, tincidunt ipsum. Donec faucibus congue porttitor.
    </div>
  </>
}



export default App
