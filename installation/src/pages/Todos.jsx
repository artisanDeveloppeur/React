import { useReducer } from "react"


export function Todos() {



  const [state, dispatch] = useReducer(reducer, {
    todos: [
      { name: 'Comprendre JavaScript', checked: true },
      { name: 'Utiliser npm', checked: true },
      { name: 'Apprendre Reactjs', checked: false }
    ]

  })

  function reducer(state, action) {
    if (action.type === 'REMOVE_TODO') {
      return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.payload)
      }
    }
    //console.log({ state, action })
    return state

  }
  return <>
    <h1 className="mb-3">hook useReducer : todos</h1>
    <ul>
      {state.todos.map(todo => (<li
        key={todo.name}
        onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}
      >{todo.name}
      </li>))}
    </ul>
  </>
}

