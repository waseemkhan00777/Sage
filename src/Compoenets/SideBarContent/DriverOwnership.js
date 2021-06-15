import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class DriverOwnership extends Component {
    constructor(){
        super()
        this.state={
            itemClicked1:false
            
        }
        this.handleClickFirst = this.handleClickFirst.bind(this);   
    }
    handleClickFirst = () => {
        this.setState({ 
            itemClicked1: !this.state.itemClicked1,
        });
    };
    
    render(){
        const icon1 = this.state.itemClicked1 ? (<span key={this.state.itemClicked1} className="fa fa-close"/>) : (<span key={this.state.itemClicked1} className="fa fa-plus"/>);
        
        return(
            <div className="col-md-8">
            <Accordion className="HelpCenterAccordian">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Driver Reward Program{icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>From day one Sage has been a driver-centric company. We know the drivers' concerns since the founders themsleves used to drive for
rideshare companies and started Sage to solve for many of the mal issues they observed or experienced. Additionally, we created a program that will grant all enrolled drivers with stock option availability from day one.</p>

<p>How it works? Once you complete the sign up process you will be instructed to proceed to a page where you will have the opportunity to claim stock optons
according to applicable law and Sage policies. You will be prompted to read, understand and agree with our legal requirements to complete the process.</p>

<p>Disclaimer: Sage can not provide you with professional financial advisory, You need to consult with a financial advisor; see our recommended financial advisor page or use your own. Stock options are subject to rules and regulations, vesting and other adjustments. Sage reserves right to repeal or cancel stock option grants without your consent.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default DriverOwnership