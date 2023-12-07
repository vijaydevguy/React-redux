import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state => state.user.value)

    //below code hides everything below name, age , mail
    if(!user.name){
        return
    }

  return (
    <div className='profile'>
      <h1>Profile</h1>
      <h2>Name: {user.name} </h2>
      <h2>Age: {user.age}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  )
}

export default Profile
