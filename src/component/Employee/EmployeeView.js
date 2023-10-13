import React, { useEffect, useState } from 'react';
import axios from "axios";
import {FaEdit,FaEye,FaTrashAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import Search from '../common/Search';

const EmployeeView = () => {

    const[Employee,setEmployee]=useState([]);
    
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        loadEmployee();
    },[]);

    const loadEmployee=async()=>{
        const result = await axios.get("http://localhost:9192/Employee",{
            validateStatus:()=>{
                return true;
            }
        }
        );
        if (result.status===302){
        setEmployee(result.data);
        }
    }

    const handleDelete = async(id)=>{
        await axios.delete(`http://localhost:9192/Employee/delete/${id}`);
        loadEmployee();
    };

  return (
    <section>
        <Search
            search={search}
            setSearch={setSearch}/>
        <table className='table table-bordered table-hover shadow'>
            <thead>
                <tr className='text-center'>
                  <th>ID</th>  
                  <th>First Name</th>  
                  <th>Last Name</th>  
                  <th>Email</th>  
                  <th>Department</th>  
                  <th colSpan="3">Actions</th>  
                </tr>
            </thead>

            <tbody className='text-center'>
                  {Employee./*filter((st)=>
                        st.first_name.toLowerCase().includes(search)).*/
                    map((Employee,index)=>(
                    <tr key={Employee.id}>
                    <th scope="row" key={index}>
                        {index + 1}
                    </th>
                    <td>{Employee.first_name}</td>
                    <td>{Employee.last_name}</td>
                    <td>{Employee.email}</td>
                    <td>{Employee.department}</td>
                    <td className='mx-2'>
                        <Link to={`/Employee-Profile/${Employee.id}`} className="btn btn-info">
                          <FaEye/>
                        </Link>
                            </td>
                            
                    <td className='mx-2'>
                        <Link  to={`/edit-Employee/${Employee.id}`} className='btn btn-warning'>
                        <FaEdit/>
                        </Link>
                            </td>
                            
                    <td className='mx-2'>

                        <button className='btn btn-danger'
                        onClick={()=>handleDelete(Employee.id)}>
                          <FaTrashAlt/>
                        </button>

                    </td>
                </tr>
                ))}
                
            </tbody>
        </table>
    </section>
  )
}

export default EmployeeView