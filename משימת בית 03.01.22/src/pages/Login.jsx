import {useRef} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function Login({setAuth,auth}) {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const API_KEY = "AIzaSyCRjVEgHtpGNM0PNEVSv9-oIYkQRSH60t4"
    function login() {
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {email:emailRef.current.value, password:passwordRef.current.value})
        .then(res=>{
            setAuth(res.data)
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    if (auth != null) {
        return <Redirect to="/Authenticated"/>
      }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                login()
            }}>
                <input ref={emailRef} type="email" placeholder='Email'/><br/>
                <input ref={passwordRef} type="password" placeholder='password'/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}