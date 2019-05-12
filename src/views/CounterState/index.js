import React, { 
	useState, 
	useEffect, 
	useCallback, 
	useMemo, 
	useReducer 
} from 'react';

export function CounterState() {
	const [count, setCount] = useState(0)
	useEffect(()=> {
		console.log('count is change')
	}, [count])
	const incr = useCallback(()=> {
		setCount(count + 1)
	}, [count])
	useMemo(()=>{
		console.log('meo')
	}, [count])
  return (
    <div className="App">
      <p>useState 计数结果: {count}</p>
      <button onClick={ incr }>+1</button><br />
      <button onClick={ ()=> { setCount(count - 1) } }>-1</button><br />
      <button onClick={()=>{ setCount(0) }}>重置</button>
    </div>
  );
}