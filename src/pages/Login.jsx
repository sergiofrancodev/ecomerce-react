import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import User from './User';

const Login = () => {
  const isLogin = localStorage.getItem("token");
    const [values, setValues] = useState({
   
        showPassword: false,
      });
    
      
    
      const navigate = useNavigate();
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const { register, handleSubmit }  = useForm();

      const submit = data =>{

        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login" , data).then(res => {
            console.log(res.data.data)
            localStorage.setItem("token", res.data.data.token)
            localStorage.setItem("name", res.data.data.user.firstName )
            localStorage.setItem("lastName", res.data.data.user.lastName )
            
            alert("Sesion iniciada correctamente")
            navigate("/user")
            
        
        }).catch(error => {
            console.log(error.response.status)

            if(error.response.status === 404){
                alert("credenciales incorrectas")
            }
        
        })



      }


    return (

      
    
    
   
        <div className='box-login'>
          {


        isLogin ?
        
        <User/>
      
      :
      <>

            <div className="welcome-login">
         <h3>Welcome! Enter your email and password to continue</h3>
         </div>

         <div className="test-data">
<p>Test data</p>

<li><MailOutlineIcon sx={{fontSize: "18px", marginTop: "0.2rem", marginRight: "5px"}}/>sergiofranco555@gmail.com</li>
<li><LockOpenIcon sx={{fontSize: "18px", marginTop: "0.2rem", marginRight: "5px"}}/>sergio1234</li>
         </div>


         <FormControl sx={{ width: '80%', marginBottom: '2rem', marginTop: '2rem'}}>
    

        <FormControl sx={{ width: '100%', marginBottom: '1rem'}} variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            label="your@email.com"
            {...register("email")}
           
          />

        </FormControl>

        <FormControl sx={{ width: '100%'}} variant="outlined">

          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            {...register("password")}
            type={values.showPassword ? 'text' : 'password'}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>        
        <Button variant='contained' sx={{marginTop: "1rem"}} onClick={handleSubmit(submit)}>Login</Button>
        <div className='create-account'>
            <span>Don't have an account? Sign up</span>
        </div>
       
        </FormControl>
        </>
          }


        </div>


    
    );
};

export default Login;