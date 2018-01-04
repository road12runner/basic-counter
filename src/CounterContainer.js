// Intentionally left blank.
import React, { Component } from 'react';

import Counter from './Counter';


export default class CounterContainer extends Component {
	state = {
		count: 0
	};

	handleIncrement = () => {
		this.setState( (prevState) => {
			console.log('prevState', prevState);
			return {count: prevState.count + 1}
		});
	};
	handleDecrement = () => {
		this.setState( (prevState) => {
			console.log('prevState', prevState);
			return {count: prevState.count - 1}
		});
	};

	handleReset = () => {
		this.setState( {count: 0});
	};


	render() {
		const {count} = this.state;
		return (
			<Counter
				count={count}
				onIncrement={this.handleIncrement}
				onDecrement={this.handleDecrement}
				onReset={this.handleReset}
			/>
		);
	}
}
