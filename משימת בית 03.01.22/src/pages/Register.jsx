import axios from 'axios'
import {useRef} from 'react'
import { Redirect } from 'react-router-dom'

export default function Register({setAuth}) {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const API_KEY = "AIzaSyCRjVEgHtpGNM0PNEVSv9-oIYkQRSH60t4"
    function register() {
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {email:emailRef.current.value,password:passwordRef.current.value})
        .then(res=>{
            setAuth(res.data)
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                register()
            }}>
                <input ref={emailRef} type="email" placeholder='Email'/><br/>
                <input ref={passwordRef} type="password" placeholder='password'/><br/>
                <button type="submit" onClick={()=><Redirect to="/Authenticated"/>}>Register</button>
            </form>
        </div>
    )
}