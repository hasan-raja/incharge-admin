import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import EmployeeFinder from "../api/EmployeeFinder";

import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";
//import StarRating from "../components/StarRating";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeedetailPage = () => {
  const { id } = useParams();
  const { selectEmployee, setSelectEmployee } = useContext(EmployeeContext);
    // console.log(selectEmployee);
  useEffect(() => {
    const fetchData = async() => {
        try {
            const response= await EmployeeFinder.get(`/${id}`);
      setSelectEmployee(response.data.data);
        } catch (err) {
            console.log(err);
        }
      
    };
    fetchData();
  }, []);
  return <div>{selectEmployee && 
  (
    <>
    <h1 className="text-center display-1">{selectEmployee.employee.emp_name}</h1>
    <div className="text-center">
      <StarRating rating={selectEmployee.employee.average_rating}/>
      <span className="text-warning ml-1">
              {selectEmployee.employee.count
                ? `(${selectEmployee.employee.count})`
                : "(0)"}
            </span>
    </div>
    <div className="mt-3">
      <Reviews reviews={selectEmployee.reviews}/>
      </div>
     
      </>
  )}</div>;
};

export default EmployeedetailPage;
