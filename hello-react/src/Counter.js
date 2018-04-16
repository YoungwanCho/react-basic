import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div>

        </div>
    );
};

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    handleIncrease = () => {
        this.setState(
            ({ number }) => ({
                number: number + 1
            })
        );
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        if (this.state.error) return (<h1>에러발생</h1>);
        return (
            <div>
                <h1>카운트</h1>
                <div>값: {this.state.number}</div>
                {this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;