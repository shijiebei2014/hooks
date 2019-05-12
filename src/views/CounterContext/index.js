import React,{ 
	useReducer, 
	useContext 
} from 'react'
import { counterReducer } from '../../reducers'

const context = React.createContext({
	count: 0
})

function Counter(props) {
	const [state, dispatch] = useContext(context)
	
  return (
    <div className="App">
      <p>useContext 计数结果: {state.count}</p>
      <button onClick={ ()=> { dispatch({type:'increment'}) } }>+1</button><br />
      <button onClick={ ()=> { dispatch({type:'decrement'}) } }>-1</button><br />
      <button onClick={ ()=> { dispatch({type:'reset'}) } }>重置</button>
    </div>
  );
}

export function CounterContext() {
	const [state, dispatch] = useReducer(counterReducer, { count: 0 })

	return (
		<context.Provider value={{state, dispatch}}>
			<Counter />
		</context.Provider>
	)
}
