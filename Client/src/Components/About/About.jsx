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
                        <p className='desc'>Welcome to NewsDetect, a web-based platform designed to help combat the spread of fake news on social media and other digital platforms.  With the rise of misinformation, it's more important than ever to have reliable tools that can quickly and accurately distinguish between legitimate news and fake stories. That's where NewsDetect comes in.</p>
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
                                <p>we provide a News Feed section of NewsDetect provides users with a live update of the latest news articles that have been analyzed by our system. </p>
                            </div>
                        </div>
                        <div className="flex items">
                            <span className="icon">
                                <i className="ri-history-fill"></i>
                            </span>
                            <div className="article">
                                <h2>Trust</h2>
                                <p>At NewsDetect, we understand that trust is the cornerstone of any tool designed to combat fake news. Our goal is to provide users with a reliable and secure platform that they can trust to deliver accurate results. </p>
                            </div>
                        </div>
                        <div className="flex items">
                            <span className="icon">
                                <i className="ri-bar-chart-grouped-line"></i>
                            </span>
                            <div className="article">
                                <h2>News Prediction</h2>
                                <p> Prediction section of NewsDetect, where you can test the authenticity of news articles or social media posts. Our system uses a sophisticated machine learning model to analyze the content you provide and deliver accurate predictions on whether the news is fake or real.</p>
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