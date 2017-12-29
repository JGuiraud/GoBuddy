import React, { Component } from 'react';
import { Icon, Image } from "semantic-ui-react";
import logo from "../assets/GO_white.png";

export default class ThreeReasons extends Component {
   state = {

   }

   render() {
      const { } = this.state

      return (
         <div className="footer">
            <div className="footer-social-media">
               <div className="fotter-social-media-container">
                  <Icon circular size="large" name='facebook f' />
                  <Icon circular size="large" name='twitter' />
                  <Icon circular size="large" name='instagram' />
               </div>
            </div>
            <div className="footer-links">
               <ul>
                  <li><a href="#">Qui sommes-nous ?</a></li>
                  <li><a href="#">Contactez-nous</a></li>
                  <li><a href="#">Nos partenaires</a></li>
                  <li><a href="#">Questions/Réponses</a></li>
                  <li><a href="#">Mentions légales</a></li>
               </ul>
            </div>
            <div className="footer-logo">
               <Image src={logo} size='small' />
            </div>
         </div>
      )
   }
}
