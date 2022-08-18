import React, { Component } from 'react'
import img7 from '../Images/Cinema2.jpg'
import { styled } from '@mui/material/styles';
import homebgd from '../Images/Cinema3.jpg'
import '../Css/Home.css'
import { Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';

const SubscribeButton = styled(Button)({
  fontSize: 30,
  color: 'silver',
})
const LoginButton = styled(Button)({
  fontSize: 30,
  marginLeft: '800px',
  color: 'silver',
  marginRight: '40px'
})

class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className= 'home-body' style= {{backgroundImage: `url(${homebgd})`,
      height: '100vh', width: '100%',
      backgroundRepeat: 'no-repeat',
       }} >
         <h1 className= 'welcome-text'>Welcome to Gast Cinema</h1> <br/>
         <div>
         <LoginButton variant='outlined'
         component= {RouterLink} to= '/login'
         >Login</LoginButton>
         <SubscribeButton 
         component= {RouterLink} to= '/create-account'
         variant='outlined'>Subscribe</SubscribeButton>
      </div>
         
      </div>
    )
  }
}

export default Home