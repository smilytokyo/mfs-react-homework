import React from 'react';
import ReactDOM from 'react-dom';

class ClickTest extends React.Component{
    state = {count: 0}

    click = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const {count}=this.state
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.click}>click</button>
            </div>
        )
    }
}

ReactDOM.render(<ClickTest/>,document.getElementById('root'))