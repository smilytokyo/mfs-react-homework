import React from 'react';
import ReactDOM from 'react-dom';

class Click extends React.Component{
    state = {count: 0, num1: 0, num2: 0}
    click1 = () => {
        this.setState({
            count: this.state.count + 1,
            num1: this.state.num1 + 1
        })
    }
    click2 = () => {
        this.setState({
            count: this.state.count + 1,
            num2: this.state.num2 + 1
        })
    }
    render(){
        const {count,num1,num2} = this.state
        return (
            <div>
                <p>{count}</p>
                <button onClick={this.click1}>{num1}</button>
                <button onClick={this.click2}>{num2}</button>
            </div>
        )
    }
}
ReactDOM.render(<div><Click/></div>, document.getElementById('root'))