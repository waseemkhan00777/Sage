import React, { Component } from 'react'
import { Dropdown } from "react-bootstrap"
import FirstDropdown from '../SideBarContent/FirstDropdown'
import SecondDropdown from '../SideBarContent/SecondDropdown'
import ThirdDropdown from '../SideBarContent/ThirdDropdown'


export class DropdownMenuCMP extends Component{
    constructor(){
        super();
        
        this.myComponent = <FirstDropdown/>
    }
    state = {
        currency: 'Rider',
        dropDownOpen: '',
     }
     
     toggle = () => {
         this.setState({
            dropDownOpen: !this.state.dropDownOpen,
         })
     }
     
     handleChange = (code) => {
         this.setState({
             currency: code
         })
         if(code ==='Rider'){
            this.myComponent = <FirstDropdown/>
         }else if(code==='Driver'){
            this.myComponent = <SecondDropdown/>
         }else if(code==='Policies'){
            this.myComponent = <ThirdDropdown/>
         }
     }
     render(){
        return(
            <div id="dropdownMenu">
                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    {this.state.currency}
                </Dropdown.Toggle>
                
                <Dropdown.Menu id="dropdownMenuList">
                    <Dropdown.Item onClick={() => this.handleChange('Rider')} dropDownValue="Rider">Rider</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.handleChange('Driver')} dropDownValue="Driver">Driver</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.handleChange('Policies')} dropDownValue="Policies">Policies</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                {this.myComponent}
            </div>
        )
    }     
}
export default DropdownMenuCMP