import React, { Component } from 'react'
import EmployeeService from './EmployeeService'


class Employee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            // contact: '',
            // dob: '',
            // doj: '',
            // emailId: '',
            // empname: '',
            // emprole: ''
        }
        this.addEmployee = this.addEmployee.bind(this)
        this.update=this.update.bind(this)
        // this.saveEmployee = this.saveEmployee.bind(this)
        // this.changeContactHandler = this.changeContactHandler.bind(this)
        // this.changedobhandler = this.changedobhandler.bind(this)
        // this.changedojhandler = this.changedojhandler.bind(this)
        // this.changeemailidhandler = this.changeemailidhandler.bind(this)
        // this.changeempnamehandler = this.changeempnamehandler.bind(this)
        // this.changeemprolehandler = this.changeemprolehandler.bind(this)


    }

    componentDidMount() {
        EmployeeService.getEmployees()
            .then((response) => {
                this.setState({ employees: response.data })
            })
    }
    // changeContactHandler = (event) => {
    //     this.setState({ contact: event.target.value })
    // }
    // changedobhandler = (event) => {
    //     this.setState({ dob: event.target.value })
    // }
    // changedojhandler = (event) => {
    //     this.setState({ doj: event.target.value })
    // }
    // changeemailidhandler = (event) => {
    //     this.setState({ emailId: event.target.value })
    // }
    // changeempnamehandler = (event) => {
    //     this.setState({ empname: event.target.value })
    // }
    // changeemprolehandler = (event) => {
    //     this.setState({ emprole: event.target.value })
    // }

    // saveEmployee = (e) => {
    //     e.preventDefault();
    //     let employee = { contact: this.state.contact, dob: this.state.dob, doj: this.state.doj, emailId: this.state.emailId, empname: this.state.empname, emprole: this.state.emprole };
    //     console.log('employee=>' + JSON.stringify(employee));

    //     EmployeeService.addEmployee(employee)
    //         .then(response => {
    //             this.setState({ employees: response.data })

    //         })
    // }
    addEmployee(){
        this.props.history.push('/add')
    }

update(empid){
    this.props.history.push(`/update/${empid}`)    

}
delete(empid){
    EmployeeService.deleteEmployee(empid)
    .then(response =>{
        this.setState({employees:this.state.employees.filter(employee => employee.empid !== empid)})
    })
}



    render() {
        return (
            <div>
                <h2>Employee List</h2>
                <div>
                    <button type="btn btn-primary" onClick ={this.addEmployee}>Add Employee</button>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>Contact</td>
                            <td>DOB</td>
                            <td>DOJ</td>
                            <td>Email</td>
                            <td>Name</td>
                            <td>Role</td>
                            <td>Actions</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.empid}>
                                        <td>{employee.contact}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.doj}</td>
                                        <td>{employee.emailId}</td>
                                        <td>{employee.empname}</td>
                                        <td>{employee.emprole}</td>
                                        <td><button onClick = {() => this.update(employee.empid)}>Update</button>
                                        <button onClick = {() => this.delete(employee.empid)}>Delete</button></td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                {/* <div>
                    <h2>Add New Employee details</h2>
                    <form>
                    <table className="table table-striped">
                            <th>
                                <label>Contact :</label>
                                <input placeholder="Contact" contact="contact"
                                    value={this.state.contact} onChange={this.changeContactHandler}></input>
                            </th>
                            <th>
                                <label>Date of birth :</label>
                                <input placeholder="dob" contact="dob"
                                    value={this.state.dob} onChange={this.changedobhandler}></input>
                            </th>
                            <th>
                                <label>Date of joining :</label>
                                <input placeholder="doj" contact="doj"
                                    value={this.state.doj} onChange={this.changedojhandler}></input>
                            </th>
                            <th>
                                <label>Email Id :</label>
                                <input placeholder="emailId" contact="emailId"
                                    value={this.state.emailId} onChange={this.changeemailidhandler}></input>
                            </th>
                            <th>
                                <label>Name :</label>
                                <input placeholder="empname" contact="empname"
                                    value={this.state.empname} onChange={this.changeempnamehandler}></input>
                            </th>
                            <th>
                                <label>Role :</label>
                                <input placeholder="emprole" contact="emprole"
                                    value={this.state.emprole} onChange={this.changeemprolehandler}></input>
                            </th>
                        </table>
                        <button type="submit" onClick={this.saveEmployee}>Submit</button>
                    </form>
                </div> */}
            </div>
        )
    }

}
export default Employee