import React from 'react'
import './AboutUs.css'
import '../css/media.css'
import gif from '../../images/0212022.gif'


function AboutUs() {
  return (
    <div className="container-about">
        <div id="AboutUs" className="container-about2">
        <h2 className="about-h">About Us</h2>
            <div className="container-about3">
                <div className="container-about4">
                    <div className="container-about5">
                            <p className="about-p">Charity Dogs Club, is a collection of Galactic Dogs NFTs (Non-Fungible Tokens) randomly generated in the ethereum galaxy.</p>
                            <p className="about-p">10% of the total sales will be donated to foundations in charge of rescuing street dogs.</p>
                            <p className="about-p">We are focused on supporting, listening and working for the community.</p>
                            <p className="about-p2">From the community for the community</p>

                            
                    </div>
                </div>

                <div className="container-about6">
                    <img src={gif} alt="Gif" className="about-img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs