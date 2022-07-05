import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { Outlet } from 'react-router'

const cookie = new Cookies();

export default function PrivateRoute() {
    const user = cookie.get("Bearer");
    return user ? <Outlet/> : <Navigate to="/"/>
}