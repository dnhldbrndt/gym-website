import React from 'react'

function Featurebox() {
  return (
    <div className="a-box">
        <div class="a-b-img">
            <img src={props.image} alt=""></img>
        </div>
        <div className="a-b-text">
            <h2> {props.title}</h2>
            <p> Lorem ipsum</p>
        </div>
         </div>
  )
}

export default Featurebox