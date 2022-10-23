import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import LogoOpensea from '../../images/logo-opensea.png'
import LogoPiProtocol from '../../images/Pi-black-fill.png'


function Footer() {
    return (
        <div className="container-footer">
            <div className="container-footer1">
                <div className="container-footer2">
                    <div className="container-footer3">
                        <div className="container-footer4">
                            <ul className="footer-ul">
                                <h2 className="footer-h2">Community</h2>
                                <div className="footer-box1">
                                    <FontAwesomeIcon icon={faDiscord} className='footer-icon' /><li className="footer-li">
                                        <a rel="noreferrer" target="_blank" href="https://discord.gg/5vU3T5F7CH" className="footer-a">Discord</a></li>
                                </div>
                                <div className="footer-box1">
                                    <FontAwesomeIcon icon={faTelegram} className='footer-icon' /><li className="footer-li"><a rel="noreferrer" target="_blank" href="https://t.me/Mentalabz" className="footer-a">Telegram</a></li>
                                </div>
                                <div className="footer-box1">
                                    <FontAwesomeIcon icon={faTwitter} className='footer-icon' /><li className="footer-li"><a rel="noreferrer" target="_blank" href="https://twitter.com/dogs_charity" className="footer-a">Twitter</a></li>
                                </div>
                            </ul>

                            <ul className="footer-ul2">
                                <h2 className="footer-h2">Links</h2>
                                <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://mentalabz.com" className="footer-a">MentaLabz</a></li>
                                <li className="footer-li"><a href="#Polarys" className="footer-a">Polarys</a></li>
                                <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://mentalabz.com" className="footer-a">Team</a></li>
                            </ul>

                            <ul className="footer-ul3">
                                <div className="footer-box1">
                                    <img src={LogoPiProtocol} alt="LogoPiProtocol" className="footer-img3" />
                                    <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://eth.pinft.market/LPCollection/0x053abb888946d56635f795dda97e6a7ff6217fd5" className="footer-a">PiProtocol</a></li>
                                </div>
                                <div className="footer-box1">
                                    <img src={LogoOpensea} alt="LogoOpensea" className="footer-img2" />
                                    <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://opensea.io/collection/charity-dogs-club" className="footer-a">OpenSea</a></li>
                                </div>
                                {/*<li className="footer-li"><a href="https://twitter.com/dogs_charity" className="footer-a">Twitter</a></li>*/}
                            </ul>


                        </div>
                        <h2 className="footer-h">©2022, Charity Dogs Club</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer