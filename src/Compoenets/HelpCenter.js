import React, { Component } from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import Charge from './SideBarContent/Charge'
import RideRequest from './SideBarContent/RideRequest'
import AfterRides from './SideBarContent/AfterRides'
import PickVehicle from './SideBarContent/PickVehicle'
import RideFare from './SideBarContent/RideFare'
import Requirements from './SideBarContent/Requirements'
import AntiDiscrimination from './SideBarContent/AntiDiscrimination'
import InsuranceAndAccidents from './SideBarContent/InsuranceAndAccidents'

import CancellationAndTolls from './SideBarContent/CancellationAndTolls'
import RideTypes from './SideBarContent/RideTypes'
import ZeroDrug from './SideBarContent/ZeroDrug'
import TermsOfUse from './SideBarContent/TermsOfUse'
import PrivacyPolicyCont from './SideBarContent/PrivacyPolicyCont'
import DriverOwnership from './SideBarContent/DriverOwnership'
import DropDownMenuCMP from './Shared/DropDownMenuCMP'


export class HelpCenter extends Component {
    constructor(){
        super()
        this.state={
            menuID:"",
            firstLink:true,
            linkClicked1:false,
            linkClicked2:false,
            linkClicked3:false,
            linkClicked4:false,
            linkClicked5:false,
            
            linkClicked12:false,
            linkClicked22:false,
            linkClicked32:false,
            linkClicked42:false,

            linkClicked13:false,
            linkClicked23:false,
            linkClicked33:false,
            linkClicked43:false,
            linkClicked53:false,

            viewComponent:false //for displaying the sidebar contents...
        }
        this.handleClick = this.handleClick.bind(this);
        this.viewCMP = <RideRequest/>;
        this.viewCMP2 = <Requirements/>;
        this.viewCMP3 = <AntiDiscrimination/>;
    }
    handleClick(event) {
        const id = event.target.id;
        this.setState({
            menuID:id,
            viewComponent:true,
            firstLink:false
        })
        event.preventDefault();
            //first
            if(id==="rideRequest"){
                this.setState({
                    linkClicked1:true,
                    linkClicked2:false,
                    linkClicked3:false,
                    linkClicked4:false,
                    linkClicked5:false,
                })
                this.viewCMP = <RideRequest/>
            }
            else if(id==="chargesAndFees"){
                this.setState({
                    linkClicked1:false,
                    linkClicked2:true,
                    linkClicked3:false,
                    linkClicked4:false,
                    linkClicked5:false,
                })
                this.viewCMP = <Charge/>
            }
            else if(id==="pickVehicle"){
                this.setState({
                    linkClicked1:false,
                    linkClicked2:false,
                    linkClicked3:true,
                    linkClicked4:false,
                    linkClicked5:false,
                })
                this.viewCMP = <PickVehicle/>
            }
            else if(id==="afterRides"){
                this.setState({
                    linkClicked1:false,
                    linkClicked2:false,
                    linkClicked3:false,
                    linkClicked4:true,
                    linkClicked5:false,
                })
                this.viewCMP = <AfterRides/>
            }
            else if(id==="rideFare"){
                this.setState({
                    linkClicked1:false,
                    linkClicked2:false,
                    linkClicked3:false,
                    linkClicked4:false,
                    linkClicked5:true,
                })
                this.viewCMP = <RideFare/>
            }
            //second
            else if(id==="requirements"){
                this.setState({
                    linkClicked12:true,
                    linkClicked22:false,
                    linkClicked32:false,
                    linkClicked42:false
                })
                this.viewCMP2 = <Requirements/>
            }
            else if(id==="insuranceAcc"){
                this.setState({
                    linkClicked12:false,
                    linkClicked22:true,
                    linkClicked32:false,
                    linkClicked42:false
                })
                this.viewCMP2 = <InsuranceAndAccidents/>
            }
            else if(id==="cancellationTolls"){
                this.setState({
                    linkClicked12:false,
                    linkClicked22:false,
                    linkClicked32:true,
                    linkClicked42:false
                })
                this.viewCMP2 = <CancellationAndTolls/>
            }
            else if(id==="rideTypes"){
                this.setState({
                    linkClicked12:false,
                    linkClicked22:false,
                    linkClicked32:false,
                    linkClicked42:true
                })
                this.viewCMP2 = <RideTypes/>
            }

            //third
            else if(id==="antiDiscrim"){
                this.setState({
                    linkClicked13:true,
                    linkClicked23:false,
                    linkClicked33:false,
                    linkClicked43:false,
                    linkClicked53:false,
                })
                this.viewCMP3 = <AntiDiscrimination/>
            }
            else if(id==="zeroDrugtol"){
                this.setState({
                    linkClicked13:false,
                    linkClicked23:true,
                    linkClicked33:false,
                    linkClicked43:false,
                    linkClicked53:false,
                })
                this.viewCMP3 = <ZeroDrug/>
            }
            else if(id==="termsOfUseID"){
                this.setState({
                    linkClicked13:false,
                    linkClicked23:false,
                    linkClicked33:true,
                    linkClicked43:false,
                    linkClicked53:false,
                })
                this.viewCMP3 = <TermsOfUse/>
            }
            else if(id==="privacyPolicyID"){
                this.setState({
                    linkClicked13:false,
                    linkClicked23:false,
                    linkClicked33:false,
                    linkClicked43:true,
                    linkClicked53:false,
                })
                this.viewCMP3 = <PrivacyPolicyCont/>
            }
            else if(id==="driverOwner"){
                this.setState({
                    linkClicked13:false,
                    linkClicked23:false,
                    linkClicked33:false,
                    linkClicked43:false,
                    linkClicked53:true,
                })
                this.viewCMP3 = <DriverOwnership/>
            }
    }

    render() {
        return (
            <div>
                 <section className="hero-help-screen">
                    <div className="owl-image">
                    <img src="/images/header-owl-shape.svg" alt="header svg" className="d-none d-md-block"/>
        <img src="/images/header-owl-full.svg" alt="header svg" className="d-block d-md-none"/>
                    </div>
                    <div className="container h-100">
                    <div className="row align-items-end align-items-md-center  h-100">
                        <div className="col-md-6">
                        <div className="mb-4">
                            <h1>Hello, How Can We</h1>
                            <h1>Help?</h1>
                        </div>
                        <div className="mb-4 custome-help-input">
                            <input type="text" className="form-control" placeholder="Start Typing Your Search"/>
                            <i className="fa fa-search"></i>
                        </div>
                        <p>or choose a category to quickly find the help you need</p>
                        
                        </div>
                        <div className="col-md-6">
                        <img src="/images/help.svg" className="w-100" alt=""/>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="HelpFAQ SectionPadding">
                    <div className="container">
                    <div>
                        <DropDownMenuCMP/>
                    </div>
                    <div className="row" id="helpCenterContentDiv"> 
                    <div className="col-md-12">
                    <Tabs defaultActiveKey="Riders" transition={false} className="custometabsButtos">
                    <Tab eventKey="Riders" title="Riders">
                    <div className="row justify-content-center ">
                            <div className="col-md-4">
                                <ul className="helpcenterUL">
                                    <li><strong><a href="#" id="rideRequest" className={this.state.linkClicked1 ? 'activeLink' : this.state.firstLink ? 'activeLink':'sideBarMenu'}  onClick={this.handleClick}>Ride request</a></strong></li>
                                    <li><strong><a href="#" id="chargesAndFees" className={this.state.linkClicked2 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Charges and fees</a></strong></li>
                                    <li><strong><a href="#" id="pickVehicle" className={this.state.linkClicked3 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Pick a vehicle type</a></strong></li>
                                    <li><strong><a href="#" id="afterRides" className={this.state.linkClicked4 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>After rides</a></strong></li>
                                    <li><strong><a href="#" id="rideFare" className={this.state.linkClicked5 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Ride fare</a></strong></li>
                                </ul>
                            </div>
                            {this.state.viewComponent?this.viewCMP:<RideRequest/>}
                        </div>
                    </Tab>
                    <Tab eventKey="Drivers" title="Drivers">
                    <div className="row justify-content-center ">
                            <div className="col-md-4">
                                <ul className="helpcenterUL">
                                    <li><strong><a href="#" id="requirements" className={this.state.linkClicked12 ? 'activeLink' : this.state.firstLink ? 'activeLink':'sideBarMenu'}  onClick={this.handleClick}>Requirements</a></strong></li>
                                    <li><strong><a href="#" id="insuranceAcc" className={this.state.linkClicked22 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Insurance and accidents</a></strong></li>
                                    <li><strong><a href="#" id="cancellationTolls" className={this.state.linkClicked32 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Cancellation and tolls</a></strong></li>
                                    <li><strong><a href="#" id="rideTypes" className={this.state.linkClicked42 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Ride types</a></strong></li>                                  
                                </ul>
                            </div>
                        {this.state.viewComponent?this.viewCMP2:<Requirements/>}
                        
                        </div>
                    
                    </Tab>
                    <Tab eventKey="Policies" title="Policies" >
                    <div className="row justify-content-center ">
                            <div className="col-md-4">
                                <ul className="helpcenterUL">
                                    <li><strong><a href="#" id="antiDiscrim" className={this.state.linkClicked13 ? 'activeLink' : this.state.firstLink ? 'activeLink':'sideBarMenu'}  onClick={this.handleClick}>Anti-discrimination</a></strong></li>
                                    <li><strong><a href="#" id="zeroDrugtol" className={this.state.linkClicked23 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Zero drug tolerance</a></strong></li>
                                    <li><strong><a href="#" id="termsOfUseID" className={this.state.linkClicked33 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Terms of use</a></strong></li>
                                    <li><strong><a href="#" id="privacyPolicyID" className={this.state.linkClicked43 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Privacy policy</a></strong></li>
                                    <li><strong><a href="#" id="driverOwner" className={this.state.linkClicked53 ? 'activeLink' : 'sideBarMenu'} onClick={this.handleClick}>Driver ownership info</a></strong></li>
                                </ul>
                            </div>
                        {this.state.viewComponent?this.viewCMP3:<AntiDiscrimination/>}
                        </div>
                    </Tab>
                    </Tabs> 
                    </div>
                        <div className="col-md-12 mt-5 text-center NeedSomeThing">
                            <p>Need something else?</p>
                            <a href="/Contact"><button className="btn btn-theme btn-lg">Contact 24/7 support</button></a>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default HelpCenter