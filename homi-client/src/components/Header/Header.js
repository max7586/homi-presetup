import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  renderLogoutLink() {
    return (

      
      <div className='Header__logged-in'>
<ul className='link__ul'>
      <li>
        <Link
          to='/properties'>
          Properties
        </Link>
      </li>
      <li>
        <Link
          to='/listMyProperty'>
          List my property
        </Link>
      </li>

      <li>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </li>
      </ul>
      
      
        
      </div>
    )
  }

  renderLoginLink() {
    return (
      
<div className='Header__not-logged-in'>
      <ul className='link__ul'>
      <li>
        <Link
          to='/properties'>
          Properties
        </Link>
      </li>
      <li>
        <Link
          to='/listMyProperties'>
          List my properties
        </Link>
      </li>
      <li>
        <Link
          to='/login'>
          Log in
        </Link>
      </li>
      <li>
          <Link
          to='/register'>
          Register
        </Link>
      </li>
      </ul>

</div>
      
    )
  }

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            <a href="#"><i class="fas fa-home"></i></a>
            {' '}
            Homi
          </Link>
        </h1>

        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>


    </>
  }
}
