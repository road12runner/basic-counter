import React from 'react';

const counter = props => (

	<section className="Counter">
		<h1>Count: {props.count}</h1>
		<button onClick={props.onIncrement} className="full-width">Increment</button>
		<button onClick={props.onDecrement} className="full-width">Decrement</button>
		<button onClick={props.onReset} className="full-width">Reset</button>
	</section>

);

export default counter;
