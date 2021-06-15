import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class AntiDiscrimination extends Component {
    constructor(){
        super()
        this.state={
            itemClicked1:false,
            itemClicked2:false,
            itemClicked3:false
            
        }
        this.handleClickFirst = this.handleClickFirst.bind(this);
        this.handleClickSecond = this.handleClickSecond.bind(this);
        this.handleClickThird = this.handleClickThird.bind(this);     
    }
    handleClickFirst = () => {
        this.setState({ 
            itemClicked1: !this.state.itemClicked1,
            itemClicked2: false,
            itemClicked3: false,
        });
    };
    handleClickSecond = () => {
        this.setState({ 
            itemClicked1: false,
            itemClicked2: !this.state.itemClicked2,
            itemClicked3: false,
        });
    };
    handleClickThird = () => {
        this.setState({ 
            itemClicked1: false,
            itemClicked2: false,
            itemClicked3: !this.state.itemClicked3,
        });
    };
    render(){
        const icon1 = this.state.itemClicked1 ? (<span key={this.state.itemClicked1} className="fa fa-close"/>) : (<span key={this.state.itemClicked1} className="fa fa-plus"/>);
        const icon2 = this.state.itemClicked2 ? (<span key={this.state.itemClicked2} className="fa fa-close"/>) : (<span key={this.state.itemClicked2} className="fa fa-plus"/>);
        const icon3 = this.state.itemClicked3 ? (<span key={this.state.itemClicked3} className="fa fa-close"/>) : (<span key={this.state.itemClicked3} className="fa fa-plus"/>);
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
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Service animal policy{icon2}</div>
                   </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <p>"Federal and state law prohibit the drivers using Sage app from denying service to riders with service animals and from otherwise discriminating against riders with service animals. Sage intends to charge riders with a service animal an additional fee for car cleanup and you will be compensated if the animal damages your vehicle, however this will have to be proven via pictures and cooberated by the rider. It is recommended that service animals ride on the floor of the vehicle as opposed to the seats or passenger's lap.</p>
                    <p>Technically you are required by the law and our policy to always accommodate service animals, even if you have an allergy, religious or cultural objections,
                    or a fear of them.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickThird()}}>Wheelchair policy{icon3}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <p>Drivers are obligated by law and Sage policy to transport riders who use foldable mobility devices and are expected to assist riders in the storage
                    of their mobility devices unless the driver is physically unable to do so. Drivers who refuse service due to a mobility device may be suspended
                    from our platform.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }
}
export default AntiDiscrimination