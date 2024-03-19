import {
    Paper,
    Typography,
  } from '@mui/material';
import './login.css';
import CustomButton from '../../custom-button';
import CustomTextField from '../custom-testfield/textfield';
 
const LoginPage = () => {
    return (
    <div className='space'>
      <Paper className="login-paper" >
        <Typography variant="h5" align="center" gutterBottom className="formTitle">
          Login
        </Typography>
            <CustomTextField id="user_email" label="Email" variant="outlined" />
            <CustomTextField id="password" label="Password" variant="outlined" />
            <br /><br/>
            <CustomButton variant="contained" type='submit' style = {{backgroundColor:'green'}}>LOG In</CustomButton>
        </Paper>
    </div>
        
    );
 
}
export default LoginPage;


