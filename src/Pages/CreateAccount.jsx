import React from 'react'
import homebgd from '../Images/Cinema3.jpg'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function CreateAccount() {
    
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto" }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
  return (
    <div className="create-account-body" style= {{backgroundImage: `url(${homebgd})`,
    height: '100vh', width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
     }} >
      
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Create Account</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter Email or Username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField label='Re-Enter Password' placeholder='Enter password' type='password' fullWidth required/>
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                
                <Typography style= {{textAlign: 'center'}}>
                   Already have an account ?<br/>
                     <Link href="/login" >
                        Sign In 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
    </div>
  )
}

export default CreateAccount