import React, {Component} from 'react'
import WithCounter from './WithCounter'


class ClickCounter extends Component{
   
    render(){
        const {count,incrementHandler} = this.props
        return(
            <div>
                <button onClick= {incrementHandler}> Clicked {count} times</button>
               
            </div>
        )
    }
}
export default WithCounter(ClickCounter)