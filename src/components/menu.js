import React, { Component } from 'react';
import { Menu, Segment, Dropdown, Image } from 'semantic-ui-react';
import logo from "../assets/gobuddy_line.svg";

export default class MenuTop extends Component {
   state = {
      activeItem: 'home',
      selectedCity: 'Toulouse'
   }

   handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      console.log(this.state.activeItem)
   }

   handleCityChange = (e, { name }) => {
      this.setState({ selectedCity: name })
      console.log(this.state.selectedCity)
   }

   render() {
      const { activeItem } = this.state

      return (

         <Segment inverted className="menu-top">
            <Menu inverted pointing secondary>
               <Image src={logo} size='small' spaced="left" />
               <Menu.Item position='right' name='Connectez-vous' active={activeItem === 'connection'} onClick={this.handleItemClick} />
               <Menu.Item name="Clubs, c'est par là !" active={activeItem === 'clubs'} onClick={this.handleItemClick} />
               <Dropdown text={this.state.selectedCity} pointing className='link item' >
                  <Dropdown.Menu>
                     <Dropdown.Item name='Toulouse' onClick={this.handleCityChange} >Toulouse</Dropdown.Item>
                     <Dropdown.Item name='Bordeaux' onClick={this.handleCityChange} >Bordeaux</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Menu.Item />
            </Menu>
         </Segment>
      )
   }
}
