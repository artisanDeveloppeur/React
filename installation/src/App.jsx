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
    </div>
  </>
}



export default App
