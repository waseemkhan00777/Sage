import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class CancellationAndTolls extends Component {
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
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Cancellation {icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>Cancellations and no show fees are applied to make sure drivers are paid for their time and effort. We pay a driver a minimum cancellation fee.</p>
                        <p>Passenger cancellation: Drivers are paid a cancellation fee when the passenger cancels the ride due to the following incidents occurring: the passenger's cancellation time has passed; the driver's 
                        making progress to the passenger's pickup location and the driver is on track to arrive by the estimated arrival time.</p>

                        <p>Passenger no-shows fee. Drivers get a no-show fee when a rider isn't at their pickup location. Drivers should cancel the ride by clicking on ""Rider no-show"". Drivers won't get a no show fee
                        if they are too far from the pickup location and are more than five minutes past the estimated arrival time.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Acceptance rate {icon2}</div>
                   </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <p>Canceling the rides already accepted affects driver acceptance rate. The cancellation rate isn't affected if a passenger cancels or no-show.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickThird()}}>Tolls {icon3}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <p>While active, trip toll costs are automatically added to the rider's fare which means drivers pay tolls up front and then get reimbursed for tolls after the rider pays for the ride. Optional tolls
                    might be excempt from that. You can submit an inquiry for toll cost reimbursment through Sage general inquiry form on your app when applicable.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default CancellationAndTolls