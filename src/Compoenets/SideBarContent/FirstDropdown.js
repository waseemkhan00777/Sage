import React, { Component } from 'react'
import Charge from './Charge'
import RideRequest from './RideRequest'
import AfterRides from './AfterRides'
import PickVehicle from './PickVehicle'
import RideFare from './RideFare'

export class FirstDropdown extends Component{
    render(){
        return(
            <div>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Rider Request</strong></p>
                <RideRequest/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Charges and Fees</strong></p>
                <Charge/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Pick a Vehicle type</strong></p>
                <PickVehicle/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>After Rides</strong></p>
                <AfterRides/>
                <p style={{marginLeft:'20px',marginTop:'26px',borderBottom: '1px solid lightgray',paddingBottom: '15px'}}><strong>Ride fare</strong></p>
                <RideFare/>

                <div className="col-md-12 mt-5 text-center NeedSomeThing">
                            <p>Need something else?</p>
                            <a href="/Contact"><button className="btn btn-theme btn-lg">Contact 24/7 support</button></a>
                </div>
            </div>
        )
    }
}
export default FirstDropdown