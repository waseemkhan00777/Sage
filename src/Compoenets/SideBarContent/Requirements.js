import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class Requirements extends Component {
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
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Vehicle Requirements {icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>Typically each state has its own vehicle safety requirements.</p> 
                        <p>Taxis, stretch limousins and certain subcompact vehicles will not be approved for use on our platform.</p>

                        <p>Regarldess of the state you are in we require the vehicle age to be not more than 10 years. All vehicles are required to have 4 doors and 5 seatbelts. </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Driver Requirements {icon2}</div>
                   </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <p>The minimum age requirement to drive with Sage depends on region. Please check your state or region info. Potential drivers should undergo a driving
                    record check which will be conducted by a third party company. Sage will make an assesment of the results of a background check against the regulations
                    and our own safety criteria. Sage may disqualfy any applicant if any major violation(s) occured within the past three (3) years.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickThird()}}>Applications {icon3}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <p>Our application process is pretty simple and can be done through the driver app. You have to meet all vehicle and driver requirements. New applicants will be put on
                    our waitlist. Once the application is approved we will notify you through email and/or text messaging so you can start driving.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default Requirements