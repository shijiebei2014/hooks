import React,{ useReducer } from 'react'
import { counterReducer } from '../../reducers'

const initialState = { count: 0 }

export function Counter(props = initialState) {
	const [state, dispatch] = useReducer(counterReducer, initialState)
	
  return (
    <div className="App">
      <p>useReducer 计数结果: {state.count}</p>
      <button onClick={ ()=> { dispatch({type:'increment'}) } }>+1</button><br />
      <button onClick={ ()=> { dispatch({type:'decrement'}) } }>-1</button><br />
      <button onClick={ ()=> { dispatch({type:'reset'}) } }>重置</button>
    </div>
  );
}
