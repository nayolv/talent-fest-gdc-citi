import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Services = () => {
    return (
        <>
        <SideBar />
        <Outlet /> 
        </>

    )
}

export default Services
