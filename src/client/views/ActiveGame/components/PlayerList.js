import React from 'react'
import { user1, user2, user3, user4, user5, user6 } from '../../../stubs/userStubs.js'

const PlaceholderAvatar = ({user}) => {
  return (
    <div className="avatar-group">
      <img className="avatar-img" src={user.img} alt="Avatar"/>
      <p className="avatar-name">{user.name}</p>
    </div>
  )
}

const PlayerList = () => {
  return (
    <>
      <PlaceholderAvatar user={user1}/>
      <PlaceholderAvatar user={user2}/>
      <PlaceholderAvatar user={user3}/>
      <PlaceholderAvatar user={user4}/>
      <PlaceholderAvatar user={user5}/>
      <PlaceholderAvatar user={user6}/>
    </>
  )
}

export default PlayerList