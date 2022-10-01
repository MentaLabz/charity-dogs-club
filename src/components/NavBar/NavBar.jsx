/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef } from 'react'
import Logo from '../../images/Logo.png'
import './NavBar.css'
import '../css/mediakit.css'
import '../css/media.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const NavBar = ({accounts, setAccounts}) => {
  const isConnected = Boolean(accounts[0]);


  

  async function connectedAccount(){
    if (window.ethereum){
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      setAccounts(accounts)
      }
    
  };

  async function disconnectedAccount(){
    if (window.ethereum){
      const accounts = null

      window.location.reload()
      setAccounts(accounts)
    }
    
  };

const navRef = useRef();

const showNavbar = () => {
  navRef.current.classList.toggle("navbar-ul_visible")
}
  

  return (
      <div className='container-navbar'>
        <div className="container-navbar2">
          <div className="container-navbar3">
            <div className="container-navbar4">
              <div className="container-navbar5">
                <a href="#Mint" className="navbar-a2">
                  <img src={Logo} alt="Logo" className="navbar-img" />
  
                  <h2 className="navbar-h">Charity Dogs</h2></a>
  
              </div>
              <div ref={navRef} className="container-navbar6">


                <ul className="navbar-ul">
                  <li className="navbar-li"><a href="#Mint" className="navbar-a">Mint<span></span></a></li>
                  <li className="navbar-li"><a href="#Roadmap" className="navbar-a">Roadmap<span></span></a></li>
                  <li className="navbar-li"><a href="#AboutUs" className="navbar-a">About Us<span></span></a></li>
                  <li className="navbar-li">{isConnected ? (
                    <button className='navbar-button1' onClick={disconnectedAccount}>Disconnect</button>
                  ) : (
                    <button className='navbar-button' onClick={connectedAccount}>Connect</button>
                  )}</li>
                </ul>
              </div>
              <FontAwesomeIcon onClick={showNavbar} className='icon-navbar' icon={faBars} />
            </div>
          </div>
        </div>
        
      </div>
    )
}

export default NavBar
