import React from 'react'
import './Footer.css'

function Footer2() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-box">
                    <div className="footer-left">
                        <div className="footer-log">
                            <img src="./imgs/footer-log.png" alt="" />
                        </div>
                        <ul>
                            <li>Krakow</li>
                            <li>Amsterdam</li>
                            <li>Bali</li>
                            <li>Krakow</li>
                            <li>Kiev</li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <div className="footer-nav">
                            <ul>
                                <li>Facultyes</li>
                                <li>Grants</li>
                                <li>Dormitory</li>
                                <li>About</li>
                                <li>Academics</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="footerR-boxes">
                            <div className="footerR-box-left">
                                <p>www.eurouniversity.com</p>
                                <p>www.amsterdamunicity.com</p>
                                <img className='footer-socials' src="./imgs/fotor-socials.png" alt="" />
                            </div>
                            <div className="footerR-box-left">
                                <img src="./imgs/footer-logo-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2