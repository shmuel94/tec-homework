import React, { useRef,useState } from 'react'

const AddUserForm = () => {
  const [isValid, setIsValid] = useState(false)
  const nameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()
  const compudIsValid = () => {
    return (
      nameRef.current.value &&
      passwordRef.current.value &&
      emailRef.current.value
    );
  };
  return (
    <div>
      <h1>add user form</h1>
    <form
    onChange={()=>setIsValid(compudIsValid())}
      onSubmit={e => {
        e.preventDefault()
        if (compudIsValid()) {
          console.log(
            nameRef.current.value,
            passwordRef.current.value,
            emailRef.current.value
          )
        }
      }}
    >
      <input type='text' ref={nameRef} placeholder='insert name' />
      <br />
      <input type='password' ref={passwordRef} placeholder='insert password' />
      <br />
      <input type='email' ref={emailRef} placeholder='insert email' />
      <br />
      <input disabled={!isValid} type='submit' value='add user' />
    </form>
    </div>
  )
}

export default AddUserForm