import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login, logout} from './features/user'
import { useSelector } from 'react-redux'


function Login() {

    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')

    const user = useSelector(state => state.user.value)
  return (
    <div className='login'>
        {/* below code was using for if empty name and other field only it will show !user.name */}
        {!user.name && (
            <div className='inputValues'>
                <h2> name:</h2> <input value={name} onChange={e => setName(e.target.value)} placeholder='name'/>
                 <br/> <h2>age:</h2> <input value={age} onChange={e => setAge(e.target.value)} placeholder='21' />
                 <br/> <h2>Email:</h2> <input value={email} onChange={e => setEmail(e.target.value)} placeholder='name@gmail.com'/>
            </div>
        )}
      

      {!user.name ?

      <button onClick={() => dispatch(login({
        // name: 'vijay', age : 21, email : 'vijay@gmail.com'

        name,age,email
      }))}>Login</button>

      :

      <button onClick={() => dispatch(logout())}>Logout</button>

    }
    </div>
  )
}

export default Login
