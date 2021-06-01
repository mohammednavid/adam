import React from 'react'
import '../assets/styles/Workflow.css'
import RightArrow from '../assets/images/right-drawn-arrow.svg'
import arrowLeft from '../assets/images/arrowLeft.svg'
import avatar from '../assets/images/avatar.svg'
import setting from '../assets/images/settings.svg'
import password from '../assets/images/password.svg'
import statistics from '../assets/images/statistics.svg'
import advertise from '../assets/images/advertise.svg'

const Workflow =()=>{
    return(
        <div className="workflow">
            <h2 className="workflow__title">How We Work</h2>
            <div className="workflow__top">
            <div className="workflow__container">
            <div className="workflow__avatar">
                <img className="workflow__avatarIcon" src={avatar}/>
                <h1 className="workflow__header">Step 1</h1>
                <p className="workflow__desp">Get yourself an account by <strong>Sign Up!</strong></p>
            </div>
            <img src={RightArrow} alt="" className="workflow__arrowRight1"/>
            </div>
            <div className="workflow__container">
            <div className="workflow__setting">
                <img className="workflow__settingIcon" src={setting}/>
                <h1 className="workflow__header">Step 2</h1>
                <p className="workflow__desp">Subscribe to your favorite <strong>Service(s)</strong></p>
            </div>
            <img src={RightArrow} alt="" className="workflow__arrowRight2"/>
            <img src={arrowLeft} alt="" className="workflow__arrowRight3"/>
            </div>
            <div className="workflow__container">
            <div className="workflow__password">
                <img className="workflow__passwordIcon" src={password}/>
                <h1 className="workflow__header">Step 3</h1>
                <p className="workflow__desp">Give your credentials for the required Service</p>
            </div>
            {/* <img src={RightArrow} alt="" className="workflow__arrowRight"/> */}
            </div>

            </div>
            <div className="workflow__bottom">
            <div className="workflow__container">
            <div className="workflow__statistics">
                <img className="workflow__statisticsIcon" src={statistics}/>
                <h1 className="workflow__header">Step 5</h1>
                <p className="workflow__desp">Stay updated with real-time Stats & Analytics</p>
            </div>
            <img src={RightArrow} alt="" className="workflow__arrowLeft1"/>
            <img src={arrowLeft} alt="" className="workflow__arrowLeft2"/>
            </div>
            <div className="workflow__container">
            <div className="workflow__advertise">
                <img className="workflow__advertiseIcon" src={advertise}/>
                <h1 className="workflow__header">Step 4</h1>
                <p className="workflow__desp">Step up your game with advirtisement campaigns or scheduling your social media accounts!</p>
            </div>
            <img src={RightArrow} alt="" className="workflow__arrowBottom"/>
            </div>
            </div>
        </div>
    )
}

export default Workflow