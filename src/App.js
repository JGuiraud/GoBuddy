import React, { Component } from 'react'
import './App.css'
import MenuTop from './components/menu'
import Landing from './components/landing'
import ResearchSection from './components/ResearchSection';
import ThreeReasons from './components/ThreeReasons';

class App extends Component {
   render() {
      return (
         <div className="App">
            <MenuTop />
            <Landing />
            <ResearchSection />
            <ThreeReasons />
         </div>
      )
   }
}

export default App
