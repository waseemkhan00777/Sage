import React, { Component } from 'react'
import AntiDiscrimination from '../SideBarContent/AntiDiscrimination'
import ZeroDrug from '../SideBarContent/ZeroDrug'
import TermsOfUse from '../SideBarContent/TermsOfUse'
import PrivacyPolicyCont from '../SideBarContent/PrivacyPolicyCont'
import DriverOwnership from '../SideBarContent/DriverOwnership'
export class ThirdDropdown extends Component{
    render(){
        return(
            <div>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Anti-discrimination</strong></p>
                <AntiDiscrimination/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Zero drug tolerance</strong></p>
                <ZeroDrug/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Terms of use</strong></p>
                <TermsOfUse/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Privacy policy</strong></p>
                <PrivacyPolicyCont/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Driver ownership info</strong></p>
                <DriverOwnership/>

                <div className="col-md-12 mt-5 text-center NeedSomeThing">
                    <p>Need something else?</p>
                    <a href="/Contact"><button className="btn btn-theme btn-lg">Contact 24/7 support</button></a>
                </div>
            </div>
        )
    }
}
export default ThirdDropdown