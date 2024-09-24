    import React from 'react';
    import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Link, Typography,InputAdornment, IconButton } from '@material-ui/core';
    import LockIcon from '@mui/icons-material/Lock';
    import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
    import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
    import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
    import GoogleIcon from '@mui/icons-material/Google';
    import FacebookIcon from '@mui/icons-material/Facebook'


    const Signup = ({ toggleForm }) => {
        const avatarstyle = { background: 'green' };
        const paperstyle = { padding: 20, height: '80vh', width: 280, margin: "50px auto" };
        const btnstyle = {margin:'8px 0',
            backgroundColor: 'red', 
            color: '#ffffff'};
        
        return (
            <Grid>
                <Paper elevation={10} style={paperstyle}>
                    <Grid align='center'>
                        <h1>SIGN sfdadf</h1>
                        <TextField label='Username' placeholder='Enter Username' fullWidth required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlinedIcon />  
                                </InputAdornment>
                            )
                        }} />
                        <br/>
                        <TextField label='Email' placeholder='Enter Email' type='email' fullWidth required 
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon />  
                                </InputAdornment>
                            )
                        }}/>
                        <br/>
                        <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon />  
                                </InputAdornment>
                            )
                        }} />
                        <br/>
                        <TextField label='Password' placeholder='Confirm Password' type='password' fullWidth required 
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon />  
                                </InputAdornment>
                            )
                        }}/>
                    </Grid>
                    <br/>
                    <Button type='submit' color='primary' variant='contained' fullWidth style={btnstyle}>
                        Sign Up
                    </Button>
                    <Typography align = 'center'>Do you have an account? <Link href="#" onClick={toggleForm} >Login</Link></Typography>
                    <br/><br/>
                    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #ccc' }} />
                            <Typography style={{ padding: '0 10px' }}>OR</Typography>
                        <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #ccc' }} />
                    </div>
                    <br/>
                    <Typography align='center'>SignUp using</Typography>
                    <br/>
                  <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <IconButton >
                        <GoogleIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton >
                        <FacebookIcon />
                        </IconButton>
                    </Grid>
                    </Grid>
                    
                </Paper>
            </Grid>
        );
    };

    export default Signup;
