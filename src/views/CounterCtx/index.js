import React, { Component } from 'react'

const context = React.createContext({
	count: 0,
	inc: ()=>{},
	dec: ()=>{},
	reset: ()=>{}
})

function Counter(props) {
  return (
  	<context.Consumer>
  		{
  			({count, inc, dec, reset})=> (
					<div className="App">
			      <p>useCtx 计数结果: {count}</p>
			      <button onClick={inc}>+1</button><br />
			      <button onClick={dec}>-1</button><br />
			      <button onClick={reset}>重置</button>
			    </div>
				)
  		}
    </context.Consumer>
  );
}

export class CounterCtx extends Component {
	inc = () => {
		this.setState({ count: this.state.count + 1 })
	};
	dec = () => {
		this.setState({ count: this.state.count - 1 })
	};
	reset = () => {
		this.setState({ count: 0 })
	};

	constructor() {
		super()
		this.state = {
			count: 0,
			inc: this.inc,
			dec: this.dec,
			reset: this.reset
		}
	}

	render() {
		return (
			<context.Provider value={this.state}>
				<Counter />
			</context.Provider>
		)	
	}
}
// export function CounterCtx() {
// 	return (
// 		<context.Provider value={{context}}>
// 			<Counter />
// 		</context.Provider>
// 	)
// }
