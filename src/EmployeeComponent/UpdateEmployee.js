import axios from 'axios';
import React, { Component } from 'react';
import EmployeeService from './EmployeeService'

class UpdateEmployee extends Component {
    constructor(props){
        super(props)

        this.state ={
            empid:this.props.match.params.empid,
            contact: '',
            dob: '',
            doj: '',
            emailId: '',
            empname: '',
            emprole: ''

        }
        
        this.changeContactHandler = this.changeContactHandler.bind(this)
        this.changedobhandler = this.changedobhandler.bind(this)
        this.changedojhandler = this.changedojhandler.bind(this)
        this.changeemailidhandler = this.changeemailidhandler.bind(this)
        this.changeempnamehandler = this.changeempnamehandler.bind(this)
        this.changeemprolehandler = this.changeemprolehandler.bind(this)
        this.UpdateEmployee = this.UpdateEmployee.bind(this)
    }
    changeContactHandler = (event) => {
        this.setState({ contact: event.target.value })
    }
    changedobhandler = (event) => {
        this.setState({ dob: event.target.value })
    }
    changedojhandler = (event) => {
        this.setState({ doj: event.target.value })
    }
    changeemailidhandler = (event) => {
        this.setState({ emailId: event.target.value })
    }
    changeempnamehandler = (event) => {
        this.setState({ empname: event.target.value })
    }
    changeemprolehandler = (event) => {
        this.setState({ emprole: event.target.value })
    }

    UpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { empid: this.state.empid,contact: this.state.contact, dob: this.state.dob, doj: this.state.doj, emailId: this.state.emailId, empname: this.state.empname, emprole: this.state.emprole };
        console.log('employee=>' + JSON.stringify(employee));
        //EmployeeService.updateEmployee(this.state.empid,employee)
     
        axios.put(`http://localhost:8089/api/v1/employees/${employee.empid}`,employee)
    
        .then(response =>{
            this.props.history.push('/all')
            console.log(response)
        })
        .catch(error =>{console.log(error)})
        }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.empid)
        .then(response =>{
            let employee = response.data
            this.setState({
                contact:employee.contact,
           dob:employee.dob,
            doj:employee.doj,
          emailId:employee.emailId,
            empname:employee.empname,
           emprole:employee.emprole})

        })
    }    
       
    render() {
        return (
            
                 <div>
                    <h2>Update Employee details</h2>
                    <form>
                    <table className="table table-striped">
                            <th>
                                <label>Contact :</label>
                                <input  type ="text" placeholder="Contact" contact="contact"
                                    value={this.state.contact} onChange={this.changeContactHandler}></input>
                            </th>
                            <th>
                                <label>Date of birth :</label>
                                <input type ="text" placeholder="dob" contact="dob"
                                    value={this.state.dob} onChange={this.changedobhandler}></input>
                            </th>
                            <th>
                                <label>Date of joining :</label>
                                <input type ="text" placeholder="doj" contact="doj"
                                    value={this.state.doj} onChange={this.changedojhandler}></input>
                            </th>
                            <th>
                                <label>Email Id :</label>
                                <input type ="text" placeholder="emailId" contact="emailId"
                                    value={this.state.emailId} onChange={this.changeemailidhandler}></input>
                            </th>
                            <th>
                                <label>Name :</label>
                                <input type ="text" placeholder="empname" contact="empname"
                                    value={this.state.empname} onChange={this.changeempnamehandler}></input>
                            </th>
                            <th>
                                <label>Role :</label>
                                <input type ="text" placeholder="emprole" contact="emprole"
                                    value={this.state.emprole} onChange={this.changeemprolehandler}></input>
                            </th>
                        </table>
                        <button type="submit" onClick={this.UpdateEmployee}>Submit</button>
                    </form>
                </div>
            
        );
    }
}

export default UpdateEmployee;