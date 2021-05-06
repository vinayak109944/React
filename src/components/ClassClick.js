import React, {Component} from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Who clicked me')
        
    }
    render()
    {
       

        return <button onClick={this.clickHandler} >Click me</button>
    }
}
export default ClassClick