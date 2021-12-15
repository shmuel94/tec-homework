import { useState } from 'react'
import * as style from './vacation.module.css'

const VacationList = () => {
  const [vacation, setVacation] = useState([
    { select: 'usa', status: true },
    { select: 'Germany', status: false }
  ])
  const [selected, setSelected] = useState('')
  let newVacation = ''

  const handelSubmit = evt => {
    evt.preventDefault()
    if (newVacation) {
      let arrayOfVacation = [...vacation]
      arrayOfVacation.push(newVacation)
      setVacation(arrayOfVacation)
    }
  }

  const handelChange = evt => {
    if (evt.target.value !== vacation[0].select) {
      newVacation = { select: evt.target.value, status: false }
    }
  }

  const showAll = () => {
    setSelected(
      vacation.map((vaction, i) => (
        <li
          key={i}
          className={vaction.status ? style.line : ''}
          onClick={() => {
            let temp = [...vacation]
            temp[i].status = !temp[i].status
            setVacation(temp)
            showAll()
          }}
        >
          {vaction.select}
        </li>
      ))
    )
  }

  const showActive = () => {
    setSelected(
      vacation.map((vaction, i) => {
        if (!vaction.status)
          return (
            <li
              key={i}
              className={vaction.status ? style.line : ''}
              onClick={() => {
                let temp = [...vacation]
                temp[i].status = !temp[i].status
                setVacation(temp)
                showAll()
              }}
            >
              {vaction.select}
            </li>
          )
        return ''
      })
    )
  }
  const showCompeled = () => {
    setSelected(
      vacation.map((vaction, i) => {
        if (vaction.status)
          return (
            <li
              key={i}
              className={vaction.status ? style.line : ''}
              onClick={() => {
                let temp = [...vacation]
                temp[i].status = !temp[i].status
                setVacation(temp)
                showAll()
              }}
            >
              {vaction.select}
            </li>
          )
        return ''
      })
    )
  }

  return (
    <div>
      <h1>Vacations Wish List</h1>
      <form onSubmit={handelSubmit}>
        <label>Enter Vacation:</label>
        <br />
        <input type='text' onBlur={handelChange} />
        <br />
        <button type='submit' disabled={!vacation.length ? true : false}>
          Add Vacation
        </button>
      </form>
      <ol>{selected}</ol>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <button onClick={showAll}>ALL</button>
        <button onClick={showActive}>Active</button>
        <button onClick={showCompeled}>Complted</button>
      </div>
    </div>
  )
}
export default VacationList
