import axios from 'axios'
const URL = 'http://localhost:8089/api/v1/employees'

class EmployeeService{

    getEmployees()
    {
        return axios.get(URL)
    }
    addEmployee(employee)
    {
        return axios.post(`${URL}`,employee)
    }
    getEmployeeById(employeeId){
        return axios.get(URL + '/' + employeeId)
    }
    // updateEmployee(employee,employeeId){
    //     return axios.put(URL + '/' + employeeId,employee)
    // }
    deleteEmployee(employeeId)
    {
        return axios.delete(URL + '/' + employeeId)
    }
   
  
}

export default new EmployeeService()