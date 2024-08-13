import React from 'react'

function Contact() {
  return (
    <div id="contact"> 
        <h1>CONTACT US</h1>
        <form >
            <input type="text" placeholder="Full Name" rquired/>
            <input type="email" placeholder="E-Mail" rquired/>
            <textarea placeholder="Message..." name="message"></textarea>
            <input type="submit" value="Send"></input>
        </form>
    </div>
  )
}

export default Contact