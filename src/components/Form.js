import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)

        this.state ={
            username: ''

        }
        this.state = {
            Comments: ''
        }
        this.state ={
            topic: ''
        }
    }

    handleUsernameChange = (event) =>
    {
        this.setState({
            username:event.target.value
        })
           
                
        
    }
    handleCommentsChange= (event) =>
    {
        this.setState({
            Comments:event.target.value
        })
    }
    handleTopicChange = (event) =>
    {
       this.setState({
           topic:event.target.value
       })
    }
    handleSubmit = (event) =>{
    
        alert(`${this.state.username} ${this.state.Comments} ${this.state.topic} `)
    }
    
 render(){
    const {username, comments, topic} = this.state
     return(
         <form onSubmit={this.handleSubmit}>
         <div>
              <label>Username : </label>
              <input type ='text' value={username} onChange={this.handleUsernameChange}></input>
         </div>
         <div>
             <label>Comments : </label>
             <input type='textarea' value={comments} onChange={this.handleCommentsChange}></input>
         </div>
         <div>
             <select value={this.state.topic} onChange={this.handleTopicChange}>
                 <option value="Angular">Angular</option>
                 <option value="React">React  </option>

            


             </select>

         </div>
         <div>
             <button type='submit' >Submit</button>
         </div>
         </form>
     )
 }
}
export default Form