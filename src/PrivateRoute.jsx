import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { Outlet } from 'react-router'

const cookies = new Cookies()

export default function PrivateRoute() {
    const token = cookies.get('Bearer')
    if (!token) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}