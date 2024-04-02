import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = ()=>{
  const [data, setData] = useState([]);
  const [age ,setage] = useState('')
  const [experience , setexperience] = useState('')
  const [empid,setempid] = useState('')
const navigate = useNavigate();

useEffect(() => {
  getData();
});

const getData = () => {
  axios.get("https://localhost:44338/api/EmployeeDetails" ).then((result) => {
    setData(result.data);
  });
};

const calculateAge = (dateOfBirth) => {
  const selectDate = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - selectDate.getFullYear();
  return age;
};


    return(
        <Fragment>
          <h1 className="heading">Employee Management System</h1>

            <table>
                <tr>
                  <div><h4>Employee Details     :</h4></div>
                    <td>
            <Button onClick = {()=>navigate("/EmployeeDetails")}className="btn btn-primary" >Create Employee Details</Button>
            <div>&nbsp;&nbsp;&nbsp;</div>
            </td>
           </tr>
           <tr>
                  <div><h4>Experience Details  :</h4> </div>
            <td>
            <Button onClick = {()=>navigate("/EmployeeExperiencedetails")}className="btn btn-danger" >Fill Employee Experience Details</Button>
            <div>&nbsp;&nbsp;&nbsp;</div>
            </td>
            </tr>
            <br></br>
            <tr>
            <label>Employee Report</label>
            
            </tr>
            </table>
<Table striped bordered hover>
<thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Password</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Total Experience(in years)</th>
          </tr>
        </thead>
      <tbody>
      {data && data.length > 0
            ? data.map((item, index) => {
              
                return (
                  
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{calculateAge(item.dateOfBirth)}</td>
                    <td>{(calculateAge(item.dateOfBirth))-22}</td>
                    </tr>
                    );
      })
      :
      "Loading..."
    }

      </tbody>
      </Table>
      
      </Fragment>
    );
}
export default Home;