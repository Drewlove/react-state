import React, {Component} from 'react'; 

class Bomb extends Component{
    state = {
        timeElapsed: 0, 
        tickTock: 'tick'
    }

    componentDidMount(){
        this.interval = setInterval(()=> {
            let newTickTock = this.state.timeElapsed % 2 === 0 ? 'tick' : 'tock'
            this.setState({
                    timeElapsed: this.state.timeElapsed + 1, 
                    tickTock: newTickTock
                })
                if(this.state.timeElapsed === 8){
                    this.componentWillUnmount()
                }
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return(
            <div>
                {this.state.timeElapsed === 8 ?
                <p>BOOM!</p>
                    : <p>{this.state.tickTock}</p>
                }
            </div>
        ) 
    }
}

export default Bomb
