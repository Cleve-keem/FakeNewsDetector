import React from 'react'
import './Footer.modulus.css'
const Footer = () => {
    return(
        <div className="footer">
            <div className="flex container">
                <div className="footer-info">
                    <h2 className="footer-h2">Get in Touch</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsa eos asperiores Lorem ipsum, dolor sit amet</p>
                    <div className="socials">
                        <ul className="list-item">
                            <li className="item">
                                <i className="ri-instagram-line"></i>
                            </li>
                            <li className="item">
                                <i className="ri-linkedin-line"></i>
                            </li>
                            <li className="item">
                                <i className="ri-pinterest-line"></i>
                            </li>
                            <li className="item">
                                <i className="ri-twitter-x-line"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex contact-info">
                    <div className='box-wrapper'>
                        <div className="box">
                            <div className='center-vertical contact-icon'>
                                <span className="icon"><i className="ri-phone-fill"></i></span>
                                <span><a className='footer-link' href="tel:+2347085660421">+234-7085-660-421</a></span>
                            </div>
                        </div>
                    </div>
                    <div className='box-wrapper'>
                        <div className="box">
                            <div className='center-vertical contact-icon'>
                                <span className="icon"><i className="ri-mail-line"></i></span>
                                <span><a className='footer-link' href="mailto:belloharyourmidey@gmail.com">belloharyourmidey@gmail.com</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer