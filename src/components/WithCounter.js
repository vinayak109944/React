import React, {Component} from 'react'

const WithCounter = (WrappedComponent) => {
    class WithCounter extends React.Component{
        constructor(props){
            super(props)
    
            this.state ={
                count:0
            }
        }
    
        incrementHandler = () =>{
            this.setState( prevState =>{
                return{ count: prevState.count +1}
            })
        }
        render(){
            return (
                <div>
                    <WrappedComponent  count={this.state.count} incrementHandler={this.incrementHandler}
                {...this.props}
                    > </WrappedComponent>
                </div>
            )
        }
    }
    return WithCounter

}
export default WithCounter