import React, { Component } from 'react'
import {Accordion , Card} from 'react-bootstrap'

export class PickVehicle extends Component {
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
            itemClicked3: false,
        });
    };
    handleClickSecond = () => {
        this.setState({ 
            itemClicked1: false,
            itemClicked2: !this.state.itemClicked2,
            itemClicked3: false,
        });
    };
    handleClickThird = () => {
        this.setState({ 
            itemClicked1: false,
            itemClicked2: false,
            itemClicked3: !this.state.itemClicked3,
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
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickFirst()}}>Standard{icon1}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>Sandard vehicles accomodate upto four (4) passengers</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickSecond()}}>Business{icon2}</div>
                   </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <p>Luxury is an upgrade choice for each vehicle type and will send you a premium brand within the category.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" >
                    <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>{this.handleClickThird()}}>Van{icon3}</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <p>Vans accomode upto seven (7) passengers</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        );
    }
}
export default PickVehicle