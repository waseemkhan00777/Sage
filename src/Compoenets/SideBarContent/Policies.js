import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class Policies extends Component{
    constructor(){
        super()
        this.state={
            itemClicked1:false,
            itemClicked2:false,
            itemClicked3:false,
            itemClicked4:false,
            itemClicked5:false,
        }
        this.handleClickFirst = this.handleClickFirst.bind(this);
        this.handleClickSecond = this.handleClickSecond.bind(this);
        this.handleClickThird = this.handleClickThird.bind(this);  
        this.handleClickFourth = this.handleClickFourth.bind(this);
        this.handleClickFifth = this.handleClickFifth.bind(this);   
    }
    handleClickFirst = () => {
        this.setState({ 
            itemClicked1: !this.state.itemClicked1,
            itemClicked2: false,
            itemClicked3: false,
            itemClicked4: false,
            itemClicked5: false
        });
    };
    handleClickSecond = () => {
        this.setState({
            itemClicked1: false,
            itemClicked2: !this.state.itemClicked2,
            itemClicked3: false,
            itemClicked4: false,
            itemClicked5: false 
        });
    };
    handleClickThird = () => {
        this.setState({
            itemClicked1: false,
            itemClicked2: false,
            itemClicked3: !this.state.itemClicked3,
            itemClicked4: false,
            itemClicked5: false 
            });
    };
    handleClickFourth = () => {
        this.setState({ 
            itemClicked1: false,
            itemClicked2: false,
            itemClicked3: false,
            itemClicked4: !this.state.itemClicked4,
            itemClicked5: false
        });
    };
    handleClickFifth = () => {
        this.setState({ 
            itemClicked1: false,
            itemClicked2: false,
            itemClicked3: false,
            itemClicked4: false,
            itemClicked5: !this.state.itemClicked5
        });
    };
    render(){
        const icon1 = this.state.itemClicked1 ? (<span key={this.state.itemClicked1} className="fa fa-close"/>) : (<span key={this.state.itemClicked1} className="fa fa-plus"/>);
        const icon2 = this.state.itemClicked2 ? (<span key={this.state.itemClicked2} className="fa fa-close"/>) : (<span key={this.state.itemClicked2} className="fa fa-plus"/>);
        const icon3 = this.state.itemClicked3 ? (<span key={this.state.itemClicked3} className="fa fa-close"/>) : (<span key={this.state.itemClicked3} className="fa fa-plus"/>);
        const icon4 = this.state.itemClicked4 ? (<span key={this.state.itemClicked4} className="fa fa-close"/>) : (<span key={this.state.itemClicked4} className="fa fa-plus"/>);
        const icon5 = this.state.itemClicked5 ? (<span key={this.state.itemClicked5} className="fa fa-close"/>) : (<span key={this.state.itemClicked5} className="fa fa-plus"/>);

        return(
            <div className="col-md-8">
                        <Accordion className="HelpCenterAccordian">
                        <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" >
                                <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Anti-discrimination{icon1}</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    <p>Sage does not tolerate discrimination against riders or drivers based on race, religion, national origin, disablity, sexual orientation, 
                                    sex, marital status, gender identity, age or any other characteristic protected under applicable federal or state law. Any violation whether 
                                    by driver or rider will result in a loss of access to Sage application platform and service.</p>
                                    <strong>Service animal policy</strong>
                                    <p>Federal and state law prohibit the drivers using Sage app from denying service to riders with service animals and from otherwise discriminating against riders with service animals. Sage intends to charge riders with a service animal an additional fee for car cleanup and you will be compensated if the animal damages your vehicle, however this will have to be proven via pictures and cooberated by the rider. It is recommended that service animals ride on the floor of the vehicle as opposed to the seats or passenger's lap.</p>
                                    <p>Technically you are required by the law and our policy to always accommodate service animals, even if you have an allergy, religious or cultural objections,
                                    or a fear of them.</p>
                                    <strong>Wheelchair policy</strong>
                                    <p>Drivers are obligated by law and Sage policy to transport riders who use foldable mobility devices and are expected to assist riders in the storage
                                    of their mobility devices unless the driver is physically unable to do so. Drivers who refuse service due to a mobility device may be suspended
                                    from our platform.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1" >
                                <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Zero drug tolerance{icon2}</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <strong>Zero drug and alcohol policy</strong>
                                    <p>Sage has a zero-tolerance drug and alcohol policy for drivers.</p>
                                    <p> If you suspect that a driver is under the influence of drugs or alcohol, call the authorities by dialing 911 or your local non-emergency assistance line if 
                                    necessary. Also please contact Sage 24/7 support line. Please understand that this is a very serious allegation and falsely proven claims will result in the rider being suspended from our platform.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2" >
                                <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickThird()}}>Terms of use{icon3}</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <strong>Sage Terms of use</strong>
                                    <p>For reading the Terms of use please follow the link below</p>
                                    <a href="/Contact">Terms of use</a>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3" >
                                <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFourth()}}>Privacy policy{icon4}</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                 <strong>Sage Privacy policy</strong>
                                 <p>For reading the privacy policies please visit the link below</p>
                                 <a href="/PrivacyPolicy">Privacy Policy</a>   
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4" >
                                <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFifth()}}>Driver ownership info{icon5}</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <p>From day one Sage has been a driver-centric company. We know the drivers' concerns since the founders themsleves used to drive for
                                    rideshare companies and started Sage to solve for many of the mal issues they observed or experienced. Additionally, we created a program that will grant all enrolled drivers with stock option availability from day one.</p>

                                    <p>How it works? Once you complete the sign up process you will be instructed to proceed to a page where you will have the opportunity to claim stock optons
                                    according to applicable law and Sage policies. You will be prompted to read, understand and agree with our legal requirements to complete the process.</p>

                                    <strong>Disclaimer:</strong>
                                    <p>Sage can not provide you with professional financial advisory, You need to consult with a financial advisor; see our recommended financial advisor page or use your own. Stock options are subject to rules and regulations, vesting and other adjustments. Sage reserves right to repeal or cancel stock option grants without your consent.</p>    
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        </div>
        )
    }
}
export default Policies