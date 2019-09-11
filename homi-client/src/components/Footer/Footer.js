import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import TokenService from '../../services/token-service'
// import IdleService from '../../services/idle-service'
// import './Header.css'

export default class Footer extends Component {
 


  render() {
    return <>
    <div className="footer">
       <p>homi real estate | 2019 Ahmed @ am.</p>
          <p>Support <br/> max7586@supportme.com</p>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    </>
  }
}
