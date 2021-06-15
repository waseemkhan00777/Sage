import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class AfterRides extends Component {
    constructor(){
        super()
        this.state={
            itemClicked1:false,
            itemClicked2:false,
            itemClicked3:false,
            itemClicked4:false
        }
        this.handleClickFirst = this.handleClickFirst.bind(this);
        this.handleClickSecond = this.handleClickSecond.bind(this);
        this.handleClickThird = this.handleClickThird.bind(this);
        this.handleClickFourth = this.handleClickFourth.bind(this);     
    }
    handleClickFirst = () => {
        this.setState({ 
            itemClicked1: !this.state.itemClicked1,
            itemClicked2: false,
            itemClicked3: false,
            itemClicked4: false,
        });
    };
    handleClickSecond = () => {
        this.setState({ 
            itemClicked1: false,
            itemClicked2: !this.state.itemClicked2,
            itemClicked3: false,
            itemClicked4: false,
        });
    };
    handleClickThird = () => {
        this.setState({ 
            itemClicked1: false,
            itemClicked2: false,
            itemClicked3: !this.state.itemClicked3,
            itemClicked4: false,
        });
    };
    handleClickFourth = () => {
        this.setState({ 
            itemClicked1: false,
            itemClicked2: false,
            itemClicked3: false,
            itemClicked4: !this.state.itemClicked4,
         });
    };
    render(){
        const icon1 = this.state.itemClicked1 ? (<span key={this.state.itemClicked1} className="fa fa-close"/>) : (<span key={this.state.itemClicked1} className="fa fa-plus"/>);
        const icon2 = this.state.itemClicked2 ? (<span key={this.state.itemClicked2} className="fa fa-close"/>) : (<span key={this.state.itemClicked2} className="fa fa-plus"/>);
        const icon3 = this.state.itemClicked3 ? (<span key={this.state.itemClicked3} className="fa fa-close"/>) : (<span key={this.state.itemClicked3} className="fa fa-plus"/>);
        const icon4 = this.state.itemClicked4 ? (<span key={this.state.itemClicked4} className="fa fa-close"/>) : (<span key={this.state.itemClicked4} className="fa fa-plus"/>);

        return(
            <div className="col-md-8">
            <Accordion className="HelpCenterAccordian">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Ride receipt{icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>When your ride is complete you will see it in your "ride history" within the app. Also, you will receive an email with the details of your ride sent to the email address you have connected to your Sage account profile.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Forgot an item{icon2}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <p>If you think you left you item in a car please use driver contact button under given trip. This functionality will be available for an hour after the trip is completed.</p>
                    <p>However, at any given time you can use the general inquiry form under the Help section. Keep in mind that we’re unable to guarantee items will be found or delivered immediately. According to our Terms of Service we do not procure insurance for, nor are we responsible for, any personal belongings left in the car by drivers or riders. For this reason, we’re unable to provide refunds for rides or reimbursement for the value of lost items.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickThird()}}>Rating and review{icon3}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <p>After each ride, you can rate your driver and give feedback. All feedback is anonymous from the driver's perspective but will remain in your rating and review history. </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFourth()}}>Driver tips{icon4}</div>
                   </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    <p>This is a "service industry" and a gratuity for great service is welcome and appreciated by your driver. Suggested tip amounts that you can choose from will be recommended at the conclusion of your ride. </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default AfterRides