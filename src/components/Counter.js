import React, {Component} from 'react'

class Counter extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            count:0
        }

    }
    Increment()
    {
            // this.setState({
            //     count: this.state.count + 1
            // },
            // () =>{
            //     console.log('Callback value', this.state.count)
            // }
            // )
            this.setState(prevState => ({ 
                count:prevState.count + 1
            }))
            console.log(this.state.count)
    }
    Incrementfive()
    {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render()
    {
        return(
        <div>
             <h1>count- {this.state.count}</h1>
             <button onClick ={()=>this.Incrementfive()}>Increment</button>
        </div>
        )
    }
}
export default Counter