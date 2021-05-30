import React from 'react'
import {AddEmployee } from '../components/AddEmployee'
import { EmployeeList } from '../components/EmployeeList'
import Header from '../components/Header'


const Home = () => {
    return (
        <div>
            <Header/>
            <AddEmployee/>
           <EmployeeList/> 
        </div>
    )
}

export default Home;
