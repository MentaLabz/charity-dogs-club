import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="container-footer">
        <div className="container-footer1">
            <div className="container-footer2">
                <div className="container-footer3">
                    <div className="container-footer4">
                        <ul className="footer-ul">
                            <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://discord.gg/5vU3T5F7CH" className="footer-a">Discord</a></li>
                            <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://t.me/Mentalabz" className="footer-a">Telegram</a></li>
                            <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://twitter.com/dogs_charity" className="footer-a">Twitter</a></li>
                        </ul>

                        <ul className="footer-ul2">
                            <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://mentalabz.com" className="footer-a">MentaLabz</a></li>
                            <li className="footer-li"><a href="#Polarys" className="footer-a">Polarys</a></li>
                            <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://mentalabz.com" className="footer-a">Team</a></li>
                        </ul>

                        <ul className="footer-ul3">
                            <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://eth.pinft.market/LPCollection/0x053abb888946d56635f795dda97e6a7ff6217fd5" className="footer-a">PiProtocol</a></li>
                            <li className="footer-li"><a rel="noreferrer" target="_blank" href="https://opensea.io/collection/charity-dogs-club" className="footer-a">OpenSea</a></li>
                            {/*<li className="footer-li"><a href="https://twitter.com/dogs_charity" className="footer-a">Twitter</a></li>*/}
                        </ul>


                    </div>
                    <h2 className="footer-h">© Copyright 2022 - Charity Dogs </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer