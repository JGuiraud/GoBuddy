import React, { Component } from 'react';
import { Button, Icon, Dropdown, Tab } from 'semantic-ui-react';
import logo from "../assets/white_logo.png";
import go from "../assets/GO_white.png";

export default class ResearchSection extends Component {
   state = {
      activeIndex: 0,
   }

   handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      console.log(this.state.activeItem)
   }

   handleCityChange = (e, { name }) => {
      this.setState({ selectedCity: name })
      console.log(this.state.selectedCity)
   }

   log = (value) => {
      console.log(value); //eslint-disable-line
   }

   handleRangeChange = e => this.setState({ activeIndex: e.target.value })
   handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })


   render() {
      const { activeItem } = this.state

      const sports = [
         { key: 'Sp', value: 'Sp', text: 'Sports' },
         { key: 'Fb', value: 'Fb', text: 'Football' },
         { key: 'Tn', value: 'Tn', text: 'Tennis' },
         { key: 'Bkb', value: 'Bkb', text: 'Basketball' },
         { key: 'Gym', value: 'Gym', text: 'Gymnastique' },
         { key: 'Taa', value: 'Taa', text: 'Tire à l\'arc' },
         { key: 'Ds', value: 'Ds', text: 'Danse' },
      ]
      const levels = [
         { key: 'Db', value: 'Db', text: 'Débutant' },
         { key: 'In', value: 'In', text: 'Intermédiaire' },
         { key: 'Ex', value: 'Ex', text: 'Expériementé' },
         { key: 'Pro', value: 'Pro', text: 'Professionnel' },
      ]
      const age = [
         { key: 'Db', value: 'Db', text: '0 à 7 ans' },
         { key: 'In', value: 'In', text: '8 à 15 ans' },
         { key: 'Ex', value: 'Ex', text: '15 à 21 ans' },
         { key: 'Pro', value: 'Pro', text: '21 à ..' },
      ]
      const availabilityWeekDays = [
         { key: 'Mo', value: 'Mo', text: 'Lundi' },
         { key: 'Tue', value: 'Tue', text: 'Mardi' },
         { key: 'Wed', value: 'Wed', text: 'Mercredi' },
         { key: 'Thu', value: 'Thu', text: 'Jeudi' },
         { key: 'Fri', value: 'Fri', text: 'Vendredi' },
         { key: 'Sat', value: 'Sat', text: 'Samedi' },
         { key: 'Sun', value: 'Sun', text: 'Dimanche' },
      ]

      const panes = [
         {
            menuItem: "Coup d'envoi", render: () => <Tab.Pane className="envoi">
               <div>
                  <div className="search-container">
                     <div className="search-bar">
                        <div id="custom-search-input">
                           <div className="input-group">
                              <span>
                                 <Icon name='point' color="grey" />
                              </span>
                              <input type="text" className="form-control input-lg" placeholder="Où voulez-vous faire votre sport ?" />
                              <span className="input-group-btn">
                                 <Button><img src={go} alt="" /></Button>
                              </span>
                           </div>
                        </div>
                     </div>
                     <br />
                  </div>
                  <div className="drop">
                     <div className="drop-receiver">
                        <Dropdown icon={null} compact placeholder='Sports' selection options={sports} />
                        <Dropdown icon={null} compact placeholder='Niveau' selection options={levels} />
                        <Dropdown icon={null} compact placeholder='Age' selection options={age} />
                        <Dropdown icon={null} compact placeholder='Disponibilité' selection options={availabilityWeekDays} />
                     </div>
                  </div>
               </div>
            </Tab.Pane>
         },
         {
            menuItem: 'J\'ai déjà mon club ou association', render: () => <Tab.Pane className="club" >
               <div>
                  <div className="search-container input-group-orange">
                     <div className="search-bar">
                        <div id="custom-search-input">
                           <div className="input-group">
                              <span>
                                 <Icon name='search' color="grey" />
                              </span>
                              <input type="text" className="form-control input-lg" placeholder="Je connais déjà mon club ou association" />
                              {/* <span className="input-group-btn orange-go"> */}
                              <span className="input-group-btn orange-go">
                                 <Button><img src={go} alt="" /></Button>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Tab.Pane >
         },
      ]


      return (
         <div className="testtt" >
            <div className="mega-search-container">
               {/* <span htmlFor="" className="link-club-known">Le coup d'envoi</span> */}
               <Tab panes={panes} activeIndex={this.state.activeIndex} onTabChange={this.handleTabChange} />
            </div>
         </div>
      );
   }
}
