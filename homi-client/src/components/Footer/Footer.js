import React, { Component } from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import TokenService from '../../services/token-service'
// import IdleService from '../../services/idle-service'
// import './Header.css'

export default class Footer extends Component {
 


  render() {
    return <>
    <div className="footer">
    
       <p>homi real estate | 2019 Ahmed @ am.</p>
          
          <ul>
          <li>
          <a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank" ><i className="fab fa-facebook"></i></a>
          </li>
          <li><a href="http://www.twitter.com" rel="noopener noreferrer" target="_blank" ><i className="fab fa-twitter"></i></a></li>
            
            <li><a href="http://www.instagram.com" rel="noopener noreferrer" target="_blank" ><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    </>
  }
}
