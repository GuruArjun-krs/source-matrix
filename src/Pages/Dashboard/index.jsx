import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';

const Dashboard = () => {
    const navigate = useNavigate()

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard