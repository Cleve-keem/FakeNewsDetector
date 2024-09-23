import React from 'react'
import image from '../../assets/magazin.jpg';
import './About.modulus.css'
const About = () => {
    return(
        <div className='container'>
            <div className="about-wrapper">
                <div className="flex">
                    <div className="about-description">
                        <h1 className='heading'>About Us</h1>
                        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eius porro animi ratione? Commodi fugit facere nam, reiciendis eveniet pariatur dignissimos</p>
                    </div>
                </div>
                <div className="flex about-info">
                    <div className="info-container">
                        <div className="flex items">
                            <span className="icon">
                                <i className="ri-settings-5-line"></i>
                            </span>
                            <div className="article">
                                <h2>News Feed</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consectetur molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error, dolorum quae aliquid modi beatae,</p>
                            </div>
                        </div>
                        <div className="flex items">
                            <span className="icon">
                                <i className="ri-history-fill"></i>
                            </span>
                            <div className="article">
                                <h2>Trust</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consectetur molestias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, enim eligendi iste ea exercitationem excepturi architecto. Similique </p>
                            </div>
                        </div>
                        <div className="flex items">
                            <span className="icon">
                                <i className="ri-bar-chart-grouped-line"></i>
                            </span>
                            <div className="article">
                                <h2>News Prediction</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consectetur molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-img">
                        <img src={image} alt="Newspaper" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About