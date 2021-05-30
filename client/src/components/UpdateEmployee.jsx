import React,{useState,useEffect, useContext} from "react";
import { useHistory, useParams } from "react-router-dom";
import EmployeeFinder from "../api/EmployeeFinder";
import { EmployeeContext } from "../context/EmployeeContext";

export const UpdateEmployee = (props) => {
  const {id} = useParams();
    let history=useHistory();
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [branch, setBranch] = useState("");

    useEffect(() => {
        const fetchData = async()=>{
            const response = await EmployeeFinder.get(`/${id}`);
             console.log(response);
            setName(response.data.data.employee[0].emp_name);
            setDepartment(response.data.data.employee[0].emp_department);
            setBranch(response.data.data.employee[0].emp_branch);
        }
        fetchData();
    }, [])
   
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const updatedEmployee=await EmployeeFinder.put(`/${id}`,{
            emp_name:name,
            emp_department:department,
            emp_branch:branch
        });
        // console.log(updatedEmployee);
history.push("/")
    }
  return (
    <div>
      <h1 className="text-center">Update Employee</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="Employee Name">Employee Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Employee Department">Employee Department</label>
          <input
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            id="deapartment"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Employee Branch">Employee Branch</label>
          <input
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            id="branch"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <button type="submit" onClick={handleSubmit}className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};
