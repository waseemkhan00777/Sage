import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class RideFare extends Component {
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
            itemClicked2:false
        });
    };
    handleClickSecond = () => {
        this.setState({ 
            itemClicked1:false,
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
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Promotions{icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>Sage offers different types of promotions that may vary from time to time. It can be percentage discounts, fixed discounts, flat fares or other type of incentives.</p> 
                        <p>Promotions are typically shown in the Promo section of the rider app.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Sage credit{icon2}</div>
                   </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>Sage credit can be used as cash in your account and applied automatically to eligible rides in the app. Credits can be used several times until they are used up or expire.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }

}
export default RideFare