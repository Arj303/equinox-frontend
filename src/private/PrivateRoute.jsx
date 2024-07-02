import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { userContext } from '../App'
import Login from '../components/Login/Login'

function PrivateRoute() {


    let { userData, setUserData } = useContext(userContext)


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        setUserData(user)
    }, [])



    return (
        <div>

            {
                userData ? <Outlet /> : <Login />
            }

        </div>
    )
}

export default PrivateRoute