import React, { Component } from 'react'

class UserGuest extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        //if else approach
        // if(this.state.isLoggedIn)
        // return  <div>Welcome Vinayak</div>
        // else
        // return <div>Welcome Guest</div>


        //Element variables apprach
        // let message
        // if(this.state.isLoggedIn)
        // message=<div>Welcome Vinayak</div>
        // else
        // message=<div>Welcome Guest</div>

        // return <div>{message}</div>

        // Ternary conditional operator
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Vinayak</div> :
        //         <div>Welcome Guest</div>
        //)
        //short circuit operator
        return this.state.isLoggedIn && <div>Welcome Vinayak</div>


        




    }
}
export default UserGuest