import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Modal} from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'
export class Footer extends Component {
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
            <footer className="footer">
                <div className="container footer-top">
                <div className="row">
                    <div className="col-md-5"><a href="/Home"><img src="/images/logo-footer.svg" alt="logo footer"/></a></div>
                    <div className="col-md-2">
                    <ul className="list-group border-0">
                        <li className="list-group-item border-0 menu-heading"><b>SUPPORT</b></li>
                        <li className="list-group-item border-0 menu-value"><a href="/HelpCenter">Help Center</a></li>
                        <li className="list-group-item border-0 menu-value"><a href="/Contact">Contact</a></li>
                    </ul>
                    </div>
                    <div className="col-md-2">
                    <ul className="list-group border-0">
                        <li className="list-group-item border-0 menu-heading"><b>DOWNLOAD</b></li>
                        <li className="list-group-item border-0 menu-value"><a href="https://play.google.com/store/apps/details?id=com.sage.cabapp">Android</a></li>
                        <li className="list-group-item border-0 menu-value"><a href="https://apps.apple.com/us/app/sage-rider/id1537358410">IOS</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <ul className="list-group border-0">
                        <li className="list-group-item border-0 menu-heading"><b>SUBSCRIBE TO OUR NEWSLETTER</b></li>
                        <li className="list-group-item border-0 menu-value"><a href="/Home">Receive our latest news and 
                        promotions in your inbox!</a></li>
                        <li className="list-group-item">
                        <div className="newletter">
                            <input type="text" className="form-control" placeholder="Your Email Address"/>
                            <a href="#" onClick={()=>{this.handelModal()}}> <i className="fa fa-long-arrow-right"></i></a>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="footer-bottom py-3">
                <div className="container">
                <Row style={{alignItems:'center'}}>
                    <Col xs="6" ><p className="mb-0 bottomText">&copy; 2020 Sage Alliance Inc.</p></Col>
                    <Col xs="6">
                    <ul className="text-right" style={{display:'flex',justifyContent:'flex-end'}}>
                        <li className="nav-item" >
                            <Link className="nav-link nav-item bottomTwo" to="/PrivacyPolicy">Privacy Policy</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-item bottomTwo" href="/Apply">Join Us</a>
                        </li>
                        </ul>
                    </Col>
                </Row>
                </div>
                </div>
                <Modal show={this.state.show} aria-labelledby="contained-modal-title-vcenter" centered className="loginModal">
                    <Modal.Body className="p-5">
                        <button className="closePopup" onClick={()=>{this.handelModal()}}><i className="fa fa-times"></i></button>
                        <h2>Thank you</h2>
                        <br/>
                        <a href="/Home"><button className="btn btn-theme btn-block">OK</button></a>
                    </Modal.Body>
                </Modal>
            </footer>
        )
    }
}
export default Footer
