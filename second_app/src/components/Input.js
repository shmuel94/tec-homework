const Input = () =>{
    const input= (event)=> {
        console.log(event.target.value);
      }
    return (<div>
        <input  onChange={input} type="text" placeholder="insert city"></input>
    </div>)
}
 export default Input;