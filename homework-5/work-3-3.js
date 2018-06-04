import React from 'react';
import ReactDOM from 'react-dom';

function Count(props){
    return <p>{props.count}</p>
}

class Increase extends React.Component{
    render(){
        const {inc,num} = this.props
        return(
            <button onClick={()=>inc()}>{num}</button>
        )
    }
}

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
        return(
            <div>
                <Count count={count}></Count>
                <Increase inc={this.click1} num={num1}>{num1}</Increase>
                <Increase inc={this.click2} num={num2}>{num2}</Increase>
            </div>
        )
    }
}
ReactDOM.render(<Click/>, document.getElementById('root'))