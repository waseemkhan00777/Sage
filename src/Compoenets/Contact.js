import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
export class Contact extends Component {
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
            <section className="contact-screen">
                <div className="owl-image">
                <img src="/images/header-owl-shape.svg" alt="header svg" className="d-none d-md-block"/>
        <img src="/images/header-owl-full.svg" alt="header svg" className="d-block d-md-none"/>
                </div>
                <div className="container h-100">
                <div className="row align-items-center h-100 justify-content-center">
                    <div className="col-md-8 col-lg-8 col-xl-5">
                    <div className="contact-form">
                        <h1>Please, Let Us Know<br></br>What’s Going On</h1>
                        <div className="form-group">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" required="required"/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" id="phone" placeholder="Your Phone" required="required"/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" required="required"/>
                        </div>
                        <div className="form-group">
                        <textarea className="form-control" id="" rows="5" placeholder="Message" ></textarea>
                        </div>
                        <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">I'm not Robot</label>
                        </div>
                        <button className="btn btn-theme btn-block" onClick={()=>{this.handelModal()}}>Submit</button>
                    </div>
                    </div>
                </div>
                </div>
                <Modal show={this.state.show} aria-labelledby="contained-modal-title-vcenter" centered className="loginModal">
                    <Modal.Body className="p-5">
                        <button className="closePopup" onClick={()=>{this.handelModal()}}><i className="fa fa-times"></i></button>
                        <h3>Thanks for your inquiry</h3>
                        <h3>We will get back to you shortly</h3>
                        <a href="/Contact"><button className="btn btn-theme btn-block">OK</button></a>
                    </Modal.Body>
                </Modal>
            </section>
        )
    }
}

export default Contact