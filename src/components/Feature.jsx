import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../assets/1.jpg'
import fimage2 from '../assets/2.jpg'
import fimage3 from '../assets/3.jpg'
import fimage3 from '../assets/4.jpg'
function Feature() {
  return (
    <div id="features"><h1>Features</h1>
        <div className="a-container">
            <Featurebox image={fimage1} title="Weightlighting"/>           
            <Featurebox image={fimage2} title="Specific Muscles"/>            
            <Featurebox image={fimage3} title="Flex Your Muscle"/>
            <Featurebox image={fimage4} title="Cardio Excerise"/>
            
        </div>
    </div>
  )
}

export default Feature