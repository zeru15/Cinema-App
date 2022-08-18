import React, { Component } from 'react'
import '../Css/ContactUs.css'

export class ContactUS extends Component {
  render() {
    return (
      <div id='contact'>
                    <h1>CONTACT US</h1>
                    <form>
                        <input type='text' placeholder='Full Name' required />
                        <input type='email' placeholder='E-Mail' required />
                        <textarea placeholder="Write your message here......." name="message"></textarea>
                        <input type='submit' value='send'/>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                 </div>
                  
    )
  }
}

export default ContactUS