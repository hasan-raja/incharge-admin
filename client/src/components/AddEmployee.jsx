import React, { useContext, useState } from "react";
import EmployeeFinder from '../api/EmployeeFinder'
import { EmployeeContext } from "../context/EmployeeContext";
export const AddEmployee = () => {
    const {addEmployees}=useContext(EmployeeContext)
  const [empName, setEmpName] = useState("");
  const [empDepartment, setEmpDepartment] = useState("");
  const [empBranch, setEmpBranch] = useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        const response=await EmployeeFinder.post("/",{
            emp_name:empName,
            emp_department:empDepartment,
            emp_branch:empBranch
        })
        addEmployees(response.data.data.employee)
    //    console.log(response);
    }catch(err){

    }
  }


  return (
    <div className="d-flex justify-content-center m-3">
      <form action="">
        <div className="form row center">
          <div className="col">
            <input
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Emp_name"
            />
          </div>
          <div className="col">
            <input
              value={empDepartment}
              onChange={(e) => setEmpDepartment(e.target.value)}
              type="text"
              className="form-control"
              placeholder="emp_department"
            />
          </div>
          <div className="col">
            <input
              value={empBranch}
              onChange={(e) => setEmpBranch(e.target.value)}
              type="text"
              className="form-control"
              placeholder="emp_branch"
            />
          </div>
          <div className="col">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};
