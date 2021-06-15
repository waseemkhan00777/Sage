import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import {Modal,Container ,Nav , Navbar} from 'react-bootstrap'
import 'react-phone-input-2/lib/bootstrap.css'
import $ from 'jquery'

export class Navbarctm extends Component {
    componentDidMount(){

        $('.navbar-nav a').click(function(){
            var button = document.getElementsByClassName('navbar-toggler');
            button[0].click();
        })

    };
    constructor(){
        super()
        this.state={
            show:false
        }
    }

    handelModal(){
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        return (
            <div className="banner">
              

                <Navbar  expand="lg" id="navbar" className="SlidingNav">
                    <Container>
                    <Navbar.Brand >
                    <Link to="/Home" className="navbar-brand" >
                            <img src="/images/logo.svg" alt="logo svg" id="mainLogoSVG"/>
                    </Link>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="NavbarOverlay"></div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item d-block d-md-block d-lg-none">
                                <Link  to="/Home"   className={
                                    "nav-link"
                        } >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/Contact"   className={
                                     "nav-link"
                        } >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/HelpCenter"  className={
                                "nav-link"
                        } >Help Center</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-theme " onClick={()=>{this.handelModal()}}  type="submit">Login</button>
                            </li>
                            </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Modal show={this.state.show} aria-labelledby="contained-modal-title-vcenter" centered className="loginModal">
                    <Modal.Body className="p-5">
                        <button className="closePopup" onClick={()=>{this.handelModal()}}><i className="fa fa-times"></i></button>
                        <h2>Driver Login</h2>
                        <h3>We will send you a text to verify your phone</h3>
                        <PhoneInput
                            country={'us'}
                            value={this.state.phone}
                            onChange={phone => this.setState({ phone })}
                            />
                            <button className="btn btn-theme btn-block">Next</button>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default withRouter(Navbarctm)

