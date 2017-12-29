
import React, { Component } from 'react';
import { Container, Image, Card, Icon } from "semantic-ui-react";
import logo from "../assets/logo_gobuddy.svg";
import buble1 from "../assets/buble_1.svg";
import buble2 from "../assets/buble_2.svg";

export default class ThreeReasons extends Component {
   state = {

   }

   render() {
      const { } = this.state

      return (
         <div className="container-fluid reasons-container">
            <div className="container">
               <div className="row">
                  <div className="col-sm-4 cardLanding">
                     <Card.Content>
                        <Card.Header>
                           <Icon inverted name='search' size="huge" className="colorRounderIcons" />
                        </Card.Header>
                        <br />
                        <h4>Recherche Personnalisée</h4>
                        <Card.Description>
                           <p>
                              Entrez vos critères et le tour est joué ! Vous trouvez le club qui correspond à vos besoins et disponibilités.
                  </p>
                        </Card.Description>
                     </Card.Content>
                  </div>

                  <div className="col-sm-4 cardLanding">
                     <Card.Content>
                        <Card.Header>
                           <Icon inverted name='pencil' size="huge" className="colorRounderIcons" />
                        </Card.Header>
                        <br />
                        <h4>Inscription Simplifiée</h4>
                        <Card.Description>
                           <p>
                              Vous gérez tout ! Payez comme vous le souhaitez, numérisez vos documents, programmez votre cours d'essai.
                  </p>
                        </Card.Description>
                     </Card.Content>
                  </div>

                  <div className="col-sm-4 cardLanding">
                     <Card.Content>
                        <Card.Header>
                           <Icon inverted name='euro' size="huge" className="colorRounderIcons" />
                        </Card.Header>
                        <br />
                        <h4>100% Gratuit</h4>
                        <Card.Description>
                           <p>
                              Vous ne payez aucun frais supplémentaire.
Adhérez à votre club ne vous coûte rien de plus.
                  </p>
                        </Card.Description>
                     </Card.Content>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
