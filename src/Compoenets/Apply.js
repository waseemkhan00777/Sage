import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import classes from "../assets/css/landing.module.css";

export class Apply extends Component {
    constructor(){
        super()
        this.state={
            show:false,
            open:false
        }
    }

    handelModal(){
        this.setState({
            show:!this.state.show
        })
    }
    handelModalSubmission(){
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        return (
            <div>
                 <section className={classes.header}>
                    <div className={classes.mainGrid}>
                        <div>
                            <div>
                             <h1 className={classes.heading}>We want <span>GREAT PEOPLE</span> to work with.</h1>
                            </div>
                            <a href="https://sage-rideshare.typeform.com/to/TNZMWoKX"><button type="button" className={classes.headerBtn}>Apply</button></a>
                        </div>
                        <div>
                            <img src="/images/header-owl-full.svg" alt=" header svg" className={classes.backImage}/>
                            <img src="/images/check.png" alt=" check svg" className={classes.bannerImage}/>
                        </div>
                    </div>       
                </section>

                <section className={classes.teamArrow}>
                    <div className={classes.secondSectionGrid}>
                        <div className={classes.arrowImg}>
                            <img src="/images/imgteamArrow.png" alt=" imgRight svg"/>
                        </div>

                        <div className={classes.arrowText}>
                            <h2 className={classes.headingBoarding}>Do you have a boarding a pass?</h2>
                            <p>Imagine if you were one of the people invited to work on Facebook or Uber when they were first being formed.</p>
                            <p>If you took the opportunity, you would now be a successful millionaire, but if you passed on it - as some did - you would instead have a regretful story about the opportunity you once let get away. </p>
                            <p> WHAT IF THIS IS YOUR CHANCE?</p>
                            <p>Take the next step....</p>
                            <a href="https://sage-rideshare.typeform.com/to/TNZMWoKX"><button type="button" className={classes.teamArrowBtn}>Apply</button></a>

                        </div>
                    </div>

                </section>
                <section className={classes.thirdSection}>
                    <div className={classes.thirdSectionGrid}>
                    <div className={classes.storyText}>
                        <div style={{marginLeft:'10px'}}>
                            <h2 className={classes.headingStory}>You could be part of our story</h2>
                            <p> We are a Pittsburgh based startup looking for talented people to help us build a groundbreaking business model. </p>
                            <p>"WE ARE NOT ANOTHER AUTONOMOUS VEHICLE COMPANY."</p>
                            <p>What makes Sage Rideshare unique is our structural organization, and commitment to our users - not automation technology.</p>
                            <p>Founded by drivers in the ridesharing industry who know the pain points of both drivers and riders, we have unique solutions.</p>
                            </div>
                            <a href="https://sage-rideshare.typeform.com/to/TNZMWoKX"><button type="button" className={classes.teamArrowBtn}>Apply</button></a>
                        </div>

                        <div className={classes.teamNameImage}>
                            <img src="/images/imgteamName.png" alt=" ImgLeft svg"/>
                        </div>
                        

                    </div>
                </section>

                <section className={classes.teamArrow}>
                    <div className={classes.secondSectionGrid}>
                        <div className={classes.arrowImg}>
                            <img src="/images/imgmeeting.png" alt=" meeting svg"/>
                        </div>

                        <div className={classes.arrowText}>
                            <h2 className={classes.headingBoarding}>In service for the company of people</h2>
                            <p> Sage is founded by rideshare drivers who saw the flaws in the current system(s) and realized the solutions could not be achieved through lobbying. </p>
                            <p>WE HAD TO CREATE A NEW SYSTEM ENTIRELY.</p>
                            <p> Thus the concept for SAGE was born.</p>
                            <p>Our unique business model is designed to champion the working class by allowing everyday people the ability to have an ownership opportunity in the company from day one.</p>
                            <p>More than a company We're a Movement!  Join us.</p>

                            <a href="https://sage-rideshare.typeform.com/to/TNZMWoKX"><button type="button" className={classes.teamArrowBtn}>Apply</button></a>
                        </div>

                    </div>

                </section>

                <div className={classes.callToaction}>
                    <div className={classes.callToactionGrid}>
                        <div>
                            <h1 className={classes.ctaHeading}>Check this out just in case... </h1>
                            <p>You didn’t notice the button</p>
                        </div>
                        <a href="https://sage-rideshare.typeform.com/to/TNZMWoKX"><button id="bottomBtn" className={classes.ctaBtn}><b>Apply</b></button></a>
                        
                        <div className={classes.person}><img src="/images/person.png" alt=" person svg"/></div>
                    </div>
                </div>    
                
                <Modal show={this.state.open} aria-labelledby="contained-modal-title-vcenter" centered className="loginModal">
                    <Modal.Body className="p-5">
                        <button className="closePopup" onClick={()=>{this.handelModal()}}><i className="fa fa-times"></i></button>
                        <h3>Thanks for your inquiry</h3>
                        <h3>We will get back to you shortly</h3>
                        <a href="/Home"><button className="btn btn-theme btn-block">OK</button></a>
                    </Modal.Body>
                </Modal>
                
            </div>
        );
    }
}

export default Apply;
