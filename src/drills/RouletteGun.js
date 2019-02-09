import React, {Component} from 'react'; 

class RouletteGun extends Component{
    state = {
       chamber: null, 
       spinningTheChamber: false
    }


    handleClick = ()=> {
        this.setState({spinningTheChamber : true})
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
      
            this.setState({
              chamber: randomChamber,
              spinningTheChamber: false,
            })
          }, 2000)
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }


    render(){
        let result = this.props.bulletinchamber === this.state.chamber ?
        <p>Bang!</p>
        : <p>You're safe!</p>
        return(
            <div bulletinchamber={this.props.bulletinchamber}>
                {
                    this.state.spinningTheChamber === true ? 
                    <p>Spinning The Chamber...</p> 
                    : result
                }
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun; 