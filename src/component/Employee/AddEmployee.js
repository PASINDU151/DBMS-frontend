import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';


const AddEmployee = () => {
    let navigate=useNavigate();
    const[Employee,setEmployee]=useState({
        first_name:'',
        last_name:'',
        email:'',
        department:''
    })
    const{first_name,last_name,email,department}=Employee;  
    const handleInputChange=(e)=>{setEmployee({...Employee,[e.target.name]:e.target.value})};
    
    const saveEmployee=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9192/Employee",Employee);
        navigate('/view-Employee');
    }

    const textColorStyle = {
        color: 'white', // Change 'white' to your desired color
      };
    
    return (
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h2 className='mt-5' style={textColorStyle}>Add Employee</h2>
        <form onSubmit={(e)=>saveEmployee(e)}>
            <div className='input-group mb-5'>
                <label 
                    className='Input-group-text'
                        htmlFor='first_name'
                        style={textColorStyle}>
                    First Name
                </label>

                <input 
                className='form-control col-sm-6'
                type='text'
                name='first_name'
                id='first_name'
                required
                value={first_name}
                onChange={(e)=>handleInputChange(e)}/>
            </div>

            <div className='input-group mb-5'>
                <label 
                className='Input-group-text'
                        htmlFor='last_name'
                        style={textColorStyle}>
                last_name
                </label>

                <input 
                className='form-control col-sm-6'
                type='text'
                name='last_name'
                id='last_name'
                required
                value={last_name}
                onChange={(e)=>handleInputChange(e)}/>
            </div>

            <div className='input-group mb-5'>
                <label 
                className='Input-group-text'
                        htmlFor='email'
                        style={textColorStyle}>
                email
                </label>

                <input className='form-control col-sm-6'
                type='email'
                name='email'
                id='email'
                required
                value={email}
                onChange={(e)=>handleInputChange(e)}/>
            </div>

            <div className='input-group mb-5'>
                <label 
                className='Input-group-text'
                        htmlFor='department'
                        style={textColorStyle}>
                department
                </label>

                <input className='form-control col-sm-6'
                type='text'
                name='department'
                id='department'
                required
                value={department}
                onChange={(e)=>handleInputChange(e)}/>
            </div>

            <div className='row mb-5'>
                <div className='col-sm-2'>
                    <button
                    type='submit'
                    className='btn btn-outline-success btn-lg' style={textColorStyle}>
                    Save
                    </button>
                </div>
          
                <div className='col-sm-2'>
                    <Link to={'/view-Employee'}
                    type='submit'
                    className='btn btn-outline-warning btn-lg' style={textColorStyle}>
                    Cancel
                    </Link>
                </div>
            </div>

        </form>
    </div>
  )
}

export default AddEmployee