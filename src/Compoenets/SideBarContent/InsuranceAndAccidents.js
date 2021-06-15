import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class InsuranceAndAccidents extends Component {
    constructor(){
        super()
        this.state={
            itemClicked1:false,
            itemClicked2:false
            
        }
        this.handleClickFirst = this.handleClickFirst.bind(this);
        this.handleClickSecond = this.handleClickSecond.bind(this);    
    }
    handleClickFirst = () => {
        this.setState({ 
            itemClicked1: !this.state.itemClicked1,
            itemClicked2: false
        });
    };
    handleClickSecond = () => {
        this.setState({
            itemClicked1: false,
            itemClicked2: !this.state.itemClicked2
        });
    };
    render(){
        const icon1 = this.state.itemClicked1 ? (<span key={this.state.itemClicked1} className="fa fa-close"/>) : (<span key={this.state.itemClicked1} className="fa fa-plus"/>);
        const icon2 = this.state.itemClicked2 ? (<span key={this.state.itemClicked2} className="fa fa-close"/>) : (<span key={this.state.itemClicked2} className="fa fa-plus"/>);
        
        return(
            <div className="col-md-8">
            <Accordion className="HelpCenterAccordian">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Report an accident or collision {icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>Please call 911 for any emergencies.</p>

                        <p>You can also report an accident through in-app contact form to be connected with our claims department. Accidents can be 
                        vehicle collision, vehicle struck an object or vehicle damaged third-party property.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Insurance {icon2}</div>
                   </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <p>"Insurance in the ride-sharing system a bit complicated but important, hence you need to make sure you know how and when the different policies cover you 
                    in the event of an accident. There are three scenarios for when insurance is applied. When your app is off (offline), when your app is on (online), when your app
                    is on and you are on your way to pick up a passanger or making a trip while a passanger is in your car.</p>

                    <p>When your app is offline your personal auto insurance coverage applies.</p>

                    <p>When your app is on while waiting for a rider request Sage maintains auto liability coverage on your behalf in amounts at least: $50,000/person for bodily injury, $100,000/accident for bodily 
                    injury, and $25,000/accident for property damage. Sage provides this coverage if your personal auto policy does not provide coverage or its limits are less than the above stated amounts.</p>
                    
                    <p>When your app is on and you are on your way to pick up a passanger, or making a trip while a passanger is in your car, Sage will provide following coverage for accidents: $1,000,000 for 
                    third party auto liability, uninsured/underinsured mototrist bodily injury - coverage limits vary by state, contingent comprehensive and collision coverage - As long as 
                    you maintain comprehensive and collision coverage on your personal auto insurance, Sage insurance will kick in and provide physical damage coverage for your car up
                    to its actual cash value, regardless of who is at fault ($1000 deductible applies).</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default InsuranceAndAccidents