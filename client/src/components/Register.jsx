import React from 'react'
import './register.css'
import '../../App.scss'
import { Link, NavLink } from 'react-router-dom'
//import Assets
import bgpic from '../../LoginAssets/bgpic.jpg'
import logo from '../../LoginAssets/logo.jpg'
//import Icons
import { FaUserShield } from 'react-icons/fa'
import { BsShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'
import { useState } from 'react'
import Axios from 'axios'


const Register = () => {

    //usestate to hold our inputs
    const [userName, setUserName] = useState('')
    const [EmailID, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertMessage, setAlertMessage] = useState('');

    const createUser = () => {
        Axios.post('http://localhost:5000/Add-users', {
            user: userName,
            email: EmailID,
            password: password

        }).then(() => {
            console.log('User has been created')
            setAlertMessage('User added successfully!');
            alert(alertMessage)
        }).catch(error => {
            const errorMessage = JSON.parse(error.request.response)
            console.log(errorMessage.message)
        })
    }
    return (
        <div className="registerPage flex">
            <div className="container flex">

                <div className="bgDiv">
                    <img src={bgpic} />

                    <div className="textDiv">
                        <h2 className="title">Welcome to Coffee Shop</h2>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">Registered User ?</span>
                        <Link to={'/'}>
                            <button className="btn">Login</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                    </div>

                    <form action="" className="form grid">
                        <div className="inputDiv">
                            <label htmlFor="userName">User Name</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id="userName" placeholder="Enter User Name"
                                    onChange={(event) => {
                                        setUserName(event.target.value)
                                    }} />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="email">Email ID</label>
                            <div className="input flex">
                                <MdMarkEmailRead className="icon" />
                                <input type="text" id="EmailID" placeholder="Enter Email ID" onChange={(event) => {
                                    setEmail(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsShieldLockFill className="icon" />
                                <input type="password" id="password" placeholder="Enter Password" onChange={(event) => {
                                    setPassword(event.target.value)
                                }} />
                            </div>
                        </div>
                        <span className="showMessage">{alertMessage && <div>{alertMessage}</div>}</span>
                        <button type="submit" onClick={createUser} className="btn flex">
                            <span>Signup</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Register