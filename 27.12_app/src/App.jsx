import './App.css'
import PerformanceProblem from './components/PerformanceProblem';
import useFetch from "./hooks/useFetch"

function App() {
  const [data,isLoading,error] =  useFetch("https://www.reddit.com/r/reactjs.json");
  const dataEle =  error ? <p style={{color:"red"}}>Error!!!!</p> : "";
  return (
    <div className="App">
      <h1>jsonplaceholder custom url</h1>
      <h1 className={isLoading ? "loader" : " "}></h1>
        {dataEle}
      <table>
        <thead>
          <tr>
            <th>
              title
            </th>
          </tr>
        </thead>
        <tbody>
      {data.map((post,i)=>{
    return(
      <tr key={i}>
        <td>
          {post.data.title}
        </td>
      </tr>
    )
  })}
  </tbody>
  </table>
  {/* <PerformanceProblem/> */}
  </div>
  )
}

export default App