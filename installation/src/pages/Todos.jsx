import { useReducer } from "react"


export function Todos() {



  const [state, dispatch] = useReducer(reducer, {
    showCompleted: true,
    todos: [
      { name: 'Comprendre JavaScript', checked: true },
      { name: 'Utiliser npm', checked: true },
      { name: 'Apprendre Reactjs', checked: false }
    ]

  })

  const visibleTodos = state.showCompleted ? state.todos : state.todos.filter(t => !t.checked)

  function reducer(state, action) {
    if (action.type === 'REMOVE_TODO') {
      return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.payload)
      }
    }
    if (action.type === 'TOGGLE_TODO') {
      return {
        ...state,
        todos: state.todos.map(todo => todo === action.payload ? {
          ...todo, checked: !todo.checked
        } : todo)
      }
    }
    if (action.type === 'CLEAR_COMPLETED') {
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.checked)
      }
    }
    if (action.type === 'TOGGLE_FILTER') {
      return {
        ...state,
        showCompleted: !state.showCompleted
      }
    }
    //console.log({ state, action })
    return state

  }
  return <>
    <h1 className="mb-3">hook useReducer : todos</h1>
    <p>
      <input type="checkbox"
        checked={state.showCompleted}
        onChange={() => dispatch({ type: 'TOGGLE_FILTER' })}

      />
      Afficher les tâches accomplies
    </p>
    <ul>
      {visibleTodos.map(todo => (<li
        key={todo.name}

      >
        <input type="checkbox"
          onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}
          checked={todo.checked}
        />
        {todo.name}
        <button
          onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}>
          Supprimer
        </button>
      </li>))}
    </ul>
    <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Supprimer les tâches accomplies</button>
  </>
}
