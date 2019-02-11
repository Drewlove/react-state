import React, {Component} from 'react'; 

class Accordion extends Component{
    state = {
        currentSectionIndex: null
    }

    handleClick = (i)=> {
        this.setState({
            currentSectionIndex: i
        })
    }
    
    renderList(){
        return this.props.section.map((item, i ) => {
            return <li key={i}>
            <button  onClick={()=>this.handleClick(i)}>{item.title}</button>
            <p>{this.state.currentSectionIndex ===  i ? 
                this.props.section[i].content 
                : null}
            </p>
            </li>
            }
        )}

    render(){
        return (
            <div>
                <ul>
                    {!!this.props.section && this.renderList()}
                </ul>
            </div>     
        )
    }
}

export default Accordion 