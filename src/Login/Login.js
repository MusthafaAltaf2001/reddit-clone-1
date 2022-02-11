import React, {useState} from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import {ClosePopUp} from '../Actions/HandlePopUp'
import {Link} from 'react-router-dom';
import {GoogleLogin, GoogleLogout } from 'react-google-login'


function Login(props) {
    const [username, setUsername] = useState({username: ''})
    const [password, setPassword] = useState({password: ''})
    const dispatch = useDispatch()

    const handleUsername = (event) => {
        setUsername(() => {
            return { username: event.target.value}
        })
    }

    const handlePassword = (event) => {
        setPassword(() => {
            return { password: event.target.value}
        })
    }

    const handleLogIn = async () => {
        // await fetch('http://localhost:3001/auth/reddit',
        //     {
        //         method: 'GET',
        //         mode: 'no-cors',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     }
        // )
        //     .then(res => console.log(res))
        //     .then(res => console.log('redirect works'))
        //     .catch(err => console.log(err))
        
    }

    // const onLoginSuccess = async (res) => {
    //     await console.log('login success ', res)
    // }

    // const onLoginFailure = async (res) => {
    //     await console.log('login failed' + res.error + '/n' + res.details)
    // }



    return (props.trigger) ? (
        <div className='Login'>
            <div className='Login_popup'>
               <label>
                    username:
                    <input onChange={handleUsername} type='text' value={username.username}></input>
                </label>
                <label>
                    password:
                    <input onChange={handlePassword} type='password' value={password.password}></input>
                </label>
                <button onClick={handleLogIn}>Log In</button>
                <Link to='/' style={{textDecoration: 'None'}}>
                    <button onClick={() => {dispatch(ClosePopUp())}}>X</button>                
                </Link>
            </div>
        </div>
    ) : ""
}

 

export default Login

// {/* <GoogleLogin
// clientId='157519757586-omi007gl42u9g0i92b1jpkvscb0p22pj.apps.googleusercontent.com'
// clientSecret
// buttonText='Login'
// onSuccess={onLoginSuccess}
// onFailure={onLoginFailure}
// cookiePolicy={'single_host_origin'}
// />
// {/* <GoogleLogout
// clientId='157519757586-omi007gl42u9g0i92b1jpkvscb0p22pj.apps.googleusercontent.com'
// buttonText='Logout'
// onLogoutSuccess={onSignoutSuccess}
// /> */} */}