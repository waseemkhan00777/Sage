import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class Charge extends Component {
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
            <Accordion  className="HelpCenterAccordian">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Charged incorrectly{icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>Here are some common reasons riders believe they were overcharged for a ride. Check to see if any of these situations may have applied to your ride:</p>
                        <strong>Higher price than expected</strong>
                        <p>Riders may see higher ride costs when there’s more demand for rides. If your upfront price was higher than expected, it might have been busier than usual. Learn more about price calculations.</p>
                        
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Cancellation policy{icon2}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>Once a ride is requested a fee of $2-10 dollars may be charged when one or both of the following occure:</p>
                        <ol>
                            <li>The cancellation window (usually :60 seconds) has passed after the driver accepts your ride request</li>
                            <li>Your driver is already in route to pick you up and on time to arrive within 5 minutes of the original estimate</li>
                        </ol>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickThird()}}>Service fee(s){icon3}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <p>Service fees are built into your fare, so the total you see is what you pay. Service fees are the portion of your fare that goes to Sage so that we can do all the stuff we do. It is our company policy and goal to operate as a meritocracy and keep this fee as small as possible.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFourth()}}>No-Show{icon4}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <p>Your driver will wait the requisite (5) minutes after arriving to your location, at which time they have the option to cancel the ride under our no-show policy and you will be charged $5-10 dollars depending on the distance and time the driver had to travel to your pickup location.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFifth()}}>Toll Roads{icon5}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        <p>Do not pay your driver for the toll road as the fee for the toll road will be calculated within the Sage app and added to automatically to your total fee for the ride.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default Charge