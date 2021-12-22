import Level2 from './Level2'
import {UserContext} from '../context/UserContext'
const Level1 = () => {
  const user = { name: 'shmuel', email: 'shmuelmoche@gmail.com', address: 'netanya' }
  return (
    <div>
      <h2>Level 1</h2>
      <UserContext.Provider value={user}>
      <Level2/>
      </UserContext.Provider>
    </div>
  )
}

export default Level1
