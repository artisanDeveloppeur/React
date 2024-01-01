import { useState } from "react";

export function useIncrement({ base = 0, max = Infinity, min = -Infinity }) {
  const [state, setState] = useState(base)
  return {
    count: state,
    increment: () => setState(v => v < max ? v + 1 : v),
    decrement: () => setState(v => v > min ? v - 1 : v)
  }
}

{/*

import { useIncrement } from "./hooks/useIncrement"

const { count, increment, decrement } = useIncrement({
    base: 0, max: 10, min: 0
})

    Compteur {count}
    <button onClick={increment}>Incrémenter</button>
    <button onClick={decrement}>Décrémenter</button>

*/}