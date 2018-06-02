import React from 'react';
import ReactDOM from 'react-dom';

class Img extends React.Component{
    state = { id: 1 }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval( this.timerID )
    }
    tick(){
        if( this.state.id < 3 ){
            this.setState({
                id: this.state.id + 1
            })
        }else{
            this.setState({
                id: 1
            })
        }
    }
    render(){
        let url = "img" + this.state.id + ".jpg"
        let alt = "404" + this.state.id
        return (
            <div>
                <img src={url} alt={alt}/>
            </div>
        )
    }
}

ReactDOM.render(<Img/>,document.getElementById('root'))