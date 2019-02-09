import React, {Component} from 'react'; 

class HelloWorld extends Component{
    state = {
        who: 'world'
    }

    handleClick = (e)=> {
        let newWho = e.target.innerHTML; 
        this.setState({who: newWho})
    }


    render(){
        return(
            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={this.handleClick}>World</button>
                <button onClick={this.handleClick}>React</button>
                <button onClick={this.handleClick}>Friend</button>
            </div>
        ) 
    }
}

export default HelloWorld; 