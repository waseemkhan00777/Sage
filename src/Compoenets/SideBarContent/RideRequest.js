import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class RideRequest extends Component {
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
            itemClicked3: false
        });
    };
    handleClickSecond = () => {
        this.setState({
            itemClicked1: false,
            itemClicked2: !this.state.itemClicked2,
            itemClicked3: false
        });
    };
    handleClickThird = () => {
        this.setState({
            itemClicked1: false,
            itemClicked2: false,
            itemClicked3: !this.state.itemClicked3
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
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Request ride using app  {icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>Follow instructions in app to request a ride in real time. Driver proximity will vary, so you should be ready to go when you make the request. The app will show you the approximate arrival time of the driver that accepted your request.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Scheduling rides in advance {icon2}</div>
                   </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <p>Only if you are traveling to the airport or further than ten miles can you schedule a ride request in advance.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickThird()}}>Areas of operation {icon3}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <p>Please see U.S. City List. Most regions include City and surrounding areas. Ride requests can be made within any city we operate in. Rides started in a Sage region can travel upto 100 miles outside of that region of operation and is at the discretion of the driver to accept or decline. Crossing international borders is prohibited.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default RideRequest