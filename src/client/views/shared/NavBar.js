import React from 'react'
import prolificLogo from './prolificLogo.png'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <a href="#">
          <img src={prolificLogo} alt="Prolific!" />
        </a>
      </div>
      <ul className="nav-tabs">
        <li>
          <a href="#">Games</a>
        </li>
        <li>
          <a href="#">Tournaments</a>
        </li>
        <li>
          <a href="#">Leaderboard</a>
        </li>
        <li>
          <a href="#">Invite</a>
        </li>
        <li>
          <a href="#">Rules</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Donate</a>
        </li>
        <li>
          <a href="#">Forum</a>
        </li>
        <li>
          <a href="#">Log out</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
