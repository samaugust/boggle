import React from 'react'
import placeholderAvatar from '../placeholderAvatar.png'

const PlaceholderAvatar = () => {
  return (
    <div className="avatar-group">
      <img className="avatar-img" src={placeholderAvatar} alt="Avatar"/>
      <p className="avatar-name">Sam August</p>
    </div>
  )
}

const PlayerList = () => {
  return (
    <>
      <PlaceholderAvatar/>
      <PlaceholderAvatar/>
      <PlaceholderAvatar/>
      <PlaceholderAvatar/>
      <PlaceholderAvatar/>
      <PlaceholderAvatar/>
    </>
  )
}

export default PlayerList