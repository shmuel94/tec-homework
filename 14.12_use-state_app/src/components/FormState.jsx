import { useState } from "react";

const FormState = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const login = evt => {
    evt.preventDefault();
    console.log(`name : ${user.name} , password : ${user.password} , email : ${user.email} `);
  };

  return (
    <form onSubmit={login}>
      <input
        type="text"
        value={user.name}
        placeholder="name"
        onChange={evt => setUser({ ...user, name: evt.target.value })}
      /><br/>
      <input
        type="password"
        value={user.password}
        placeholder="password"
        onChange={evt => setUser({ ...user, password: evt.target.value })}
      /><br/>
      <input
        type="email"
        value={user.email}
        placeholder="email"
        onChange={evt => setUser({ ...user, email: evt.target.value })}
      /><br/>
      <input type="submit"/>
    </form>
  );
};

export default FormState;