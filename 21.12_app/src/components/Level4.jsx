import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Level4 = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <h2>Level 4C</h2>
      <p style={{ color: 'blue' }}>
        {user.name} {user.email} {user.address}
      </p>
    </div>
  )
}

export default Level4