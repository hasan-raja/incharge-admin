import React, { useState,createContext } from 'react'

export const EmployeeContext=createContext();

export const EmployeeContextProvider=props=>{
    const [employees,setEmployees]=useState([]);
    const [selectEmployee, setSelectEmployee]=useState(null);
    //console.log(employees);
    const addEmployees=(employee)=>{
        setEmployees([...employees,employee])
    }


    return(
        <EmployeeContext.Provider value={{employees,setEmployees,addEmployees,selectEmployee, setSelectEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}