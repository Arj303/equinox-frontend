import React, { useState } from 'react'
import './Signup.css'

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function LoginSignUp() {


    let navigate = useNavigate()

    let [data, setData] = useState({
        name:'',
        email: '',
        password: ''
    })

    let getData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })


    }

    function sendData() {

        axios.post('http://localhost:3000/signup', data).then((res) => {
            console.log(res);
            navigate('/')
            return

            if (res.data.loginStatus) {
                setUserData(res.data.data)
            }

        }).catch((err) => {

            // setErrMsg(err.response.data.error)
            console.log(err);
        })


    }

    return (
        <div className="signup-container">

            <form action="">


                <div className="header">
                    <h1 className="text">SIGNUP</h1>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name' name='name' onChange={getData}/>
                    </div>




                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id' name='email' onChange={getData}/>
                    </div>


                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password' name='password' onChange={getData} />
                    </div>


                </div>
                {/* <div className="forgot-password">Lost Password? <span>Click Here</span></div> */}

                <div className="submit-container">

                    <div className="submit" onClick={() => { sendData() }}>Signup</div>
                </div>

            </form>


        </div>
    )
}

export default LoginSignUp