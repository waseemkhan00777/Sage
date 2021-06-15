import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class ZeroDrug extends Component {
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
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Zero drug and alcohol policy {icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>Sage has a zero-tolerance drug and alcohol policy for drivers.</p>

                        <p>If you suspect that a driver is under the influence of drugs or alcohol, call the authorities by dialing 911 or your local non-emergency assistance line if 
                        necessary. Also please contact Sage 24/7 support line. Please understand that this is a very serious allegation and falsely proven claims will result in the rider being suspended from our platform.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default ZeroDrug