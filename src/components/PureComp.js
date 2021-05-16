import React, {PureComponent} from 'react'
import MemoComp from './MemoComp'

class PureComp extends PureComponent{
    constructor(props)
    {
        super(props)
         
        this.state = {
            name : 'Vinayak'
        }
    }
   
    render(){
        return(
            <div>
                Pure Component
                <MemoComp name={this.state.name}></MemoComp>
                
            </div>
        )

    }

}
export default PureComp