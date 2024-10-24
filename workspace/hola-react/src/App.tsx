import { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import UserForm, {UserFormState} from './forms/User'

type User = UserFormState & {id:number}
function App() {
  const [users, setUsers] = useState<User[]>([])

  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/users')
    const data: User[] = await response.json()
    setUsers(data)
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <>
      <div className="App">
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        <UserForm handleSubmit={user => setUsers([...users, {...user, id: 1}])}/>
      </div>
    </>
  )
}

export default App
