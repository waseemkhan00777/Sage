import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class PrivacyPolicyCont extends Component {
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
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Sage Privacy Policy {icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>For reading the privacy policies please visit the link below</p>
                        <a href="/PrivacyPolicy">Privacy Policy</a>   
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default PrivacyPolicyCont