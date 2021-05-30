import React, { useEffect, useContext,useState } from "react";
import EmployeeFinder from "../api/EmployeeFinder";
// import { EmployeeContext } from "../context/EmployeeContext";
import { useHistory } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";
import StarRating from "./StarRating";

export const EmployeeList = (props) => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  // console.log(employees);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeFinder.get("/");
        setEmployees(response.data.data.employees);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const handleUpdate = async (e, id) => {
    e.stopPropagation();
    history.push(`/employees/${id}/update`);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await EmployeeFinder.delete(`/${id}`);
      setEmployees(
        employees.filter((employee) => {
          return employee.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmployeeSelect = (/* e, */ id) => {
    //  e.stopPropagation();
    history.push(`/employees/${id}`);
  };

  const renderRating = (employee) => {
    if (!employee.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={employee.id} />
        <span className="text-warning ml-1">({employee.count})</span>
      </>
    );
  };

  const [search, setSearch] = useState("");
  const handleChanges = (e) => {
    setSearch(e.target.value);
  };

  const filterEmployee = employees.filter((employee) =>
    employee.emp_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="d-flex justify-content-center m-3">
        <input
          placeholder="Search Employee"
          onChange={(e) => handleChanges(e)}
        />
      </div>
      <div className="list-group">
        <table className="table table-hover bg-light">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Employee Name</th>
              <th scope="col">Employee Department</th>
              <th scope="col">Employee Branch</th>
              <th scope="col">Ratings</th>
              {/* <th scope="col">Activity</th> */}
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => (
                //   return (
                <tr
                  onClick={() => handleEmployeeSelect(employee.id)}
                  key={employee.id}
                >
                  <td>{employee.emp_name}</td>
                  <td>{employee.emp_department}</td>
                  <td>{employee.emp_branch}</td>
                  <td>{renderRating(employee)}</td>
                  {/* <td>{employee.emp_activity?'Active':'Inactive'}</td> */}
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, employee.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, employee.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                //   );
              ))}
            {/* <tr>
                            <td>Ajmal</td>
                            <td>Manager</td>
                            <td>Chennai</td>
                            <td>Activite</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                            
                        </tr>
                        <tr>
                            <td>Dee</td>
                            <td>Manager</td>
                            <td>Chennai</td>
                            <td>Activite</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                            
                        </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};
