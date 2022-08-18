import React from 'react'
import '../Css/About.css'
import one from '../Images/1.jpg'
import two from '../Images/2.jpg'
import three from '../Images/3.jpg'
import five from '../Images/5.jpg'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'

function About() {
  const paperStyle={padding :20,height:'70vh',width:800, margin:"20px auto" }
  return (
    <div>
        {/*<h1 className = 'cinema1'> Cinema 1 </h1>
        <img src= {one} />
        <img src= {three} />
        <h1 className = 'cinema1'> Cinema 2 </h1>
        <img src= {two} />
  <img src= {five} />*/}
  <div className = 'Cinema-description'>
   <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align= 'center'>
            <h2>Cinema One</h2>
        <img src= {one}  height='200px' width='500px'/>
        <br/>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero sequi, fugiat laborum officia voluptate a quo nemo asperiores, 
          accusamus, expedita iste? Quos dicta quo laudantium, 
          quasi ullam officia soluta magnam.</p>
          </Grid>
        </Paper>
    </Grid>
    <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align= 'center'>
            <h2>Cinema Two</h2>
        <img src= {three}  height='200px' width='500px'/>
        <br/>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero sequi, fugiat laborum officia voluptate a quo nemo asperiores, 
          accusamus, expedita iste? Quos dicta quo laudantium, 
          quasi ullam officia soluta magnam.</p>
          </Grid>
        </Paper>
    </Grid>
    <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align= 'center'>
            <h2>3D</h2>
        <img src= {two}  height='200px' width='500px'/>
        <br/>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero sequi, fugiat laborum officia voluptate a quo nemo asperiores, 
          accusamus, expedita iste? Quos dicta quo laudantium, 
          quasi ullam officia soluta magnam.</p>
          </Grid>
        </Paper>
    </Grid>
    </div>
    </div>
  )
}

export default About