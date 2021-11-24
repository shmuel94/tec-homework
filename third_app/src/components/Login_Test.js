const Login_Test = ()=>{
    let name;
    let password;
    const changeHandlerName = (evt) => name = evt.target.value;
    const changeHandlerPassword = (evt) => password = evt.target.value;
    const login = () => console.log(name, password);

    return(
        <div>
            <h1> Login_Test</h1>
            <input 
            onChange={changeHandlerName} 
            type="text" placeholder="enter user name"
            />
            <br/>
            <input
            onChange={changeHandlerPassword}
            type="password" placeholder="enter password"
            />
            <br/>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login_Test;