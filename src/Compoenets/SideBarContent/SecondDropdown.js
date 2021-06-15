import React, { Component } from 'react'
import Requirements from './Requirements'
import InsuranceAndAccidents from '../SideBarContent/InsuranceAndAccidents'
import CancellationAndTolls from '../SideBarContent/CancellationAndTolls'
import RideTypes from '../SideBarContent/RideTypes'
export class SecondDropdown extends Component{
    render(){
        return(
            <div>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Requirements</strong></p>
                <Requirements/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Insurance and accidents</strong></p>
                <InsuranceAndAccidents/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Cancellation and tolls</strong></p>
                <CancellationAndTolls/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Ride types</strong></p>
                <RideTypes/>

                <div className="col-md-12 mt-5 text-center NeedSomeThing">
                    <p>Need something else?</p>
                    <a href="/Contact"><button className="btn btn-theme btn-lg">Contact 24/7 support</button></a>
                </div>
            </div>
        )
    }
}
export default SecondDropdown