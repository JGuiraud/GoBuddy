import React, { Component } from 'react';
import { Container, Image, Card, Icon } from "semantic-ui-react";
import logo from "../assets/logo_gobuddy.svg";
import buble1 from "../assets/buble_1.svg";
import buble2 from "../assets/buble_2.svg";

export default class Landing extends Component {
   state = {

   }

   render() {
      const { } = this.state

      return (
         <div>
            <Container fluid className="landingTop">

               <Image.Group className="container-home-top">
                  <Image className="buble1" src={buble1} size="small" />
                  <Image className="logoTop" src={logo} />
                  <Image className="buble2" src={buble2} size="small" />
               </Image.Group>

            </Container>
         </div>
      )
   }
}
