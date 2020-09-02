import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import{Button} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
function Signup() {

      const classes = useStyles();

    return (
        
       
       <form className={classes.root} noValidate autoComplete="off">
           <div>
           <TextField required id="standard-required" label="Email" name ="Email" defaultValue="" /><br></br>
           <TextField required id="standard-required" label="Full name" name ="full name" defaultValue="" /><br></br>
           <TextField required id="standard-required" label="User name" name ="user name" defaultValue="" /><br></br>

           {/* <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        /> */}
{/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          /> */}


<Button variant="contained" color="primary" disabled={false}>
  Disabled
</Button>
           </div>
</form>
      
            
    
    )
}

export default Signup
