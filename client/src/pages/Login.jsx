import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);
  return (
    <Container component={"main"} maxWidth="xs" sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Paper elevation={3} sx={{padding: 4, display: "flex", flexDirection: "column", alignItems: "center",}}>
        { isLogin ? 
          (<>
            <Typography variant='h5'>Login</Typography>
            <form action="" style={{width: "100%", marginTop: "1rem"}}>
              <TextField required fullWidth label="Username" margin='normal' variant='outlined' />
              <TextField required fullWidth label="Password" type='password' margin='normal' variant='outlined' />
              <Button sx={{marginTop: "1rem",}} variant='contained' color='primary' type='submit' fullWidth>Login</Button>
              <Typography textAlign={'center'} m={"1rem"}>OR</Typography>
              <Button fullWidth variant='text' color='primary' onClick={toggleLogin}>Sign Up Instead</Button>
            </form>
          </>) 
          : 
          (<>
            <Typography variant='h5'>Sign up</Typography>
            <form action="" style={{width: "100%", marginTop: "1rem"}}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar sx={{width: "10rem", height: '10rem', objectFit: "contain"}} />
                <IconButton>
                  <>
                  <CameraAltIcon />
                  <VisuallyHidden>Upload Avatar</VisuallyHidden>
                  </>
                </IconButton>
              </Stack>
              <TextField required fullWidth label="Name" margin='normal' variant='outlined' />
              <TextField required fullWidth label="Username" margin='normal' variant='outlined' />
              <TextField required fullWidth label="Bio" margin='normal' variant='outlined' />
              <TextField required fullWidth label="Password" type='password' margin='normal' variant='outlined' />
              <Button sx={{marginTop: "1rem",}} variant='contained' color='primary' type='submit' fullWidth>Sign Up</Button>
              <Typography textAlign={'center'} m={"1rem"}>OR</Typography>
              <Button fullWidth variant='text' color='primary' onClick={toggleLogin}>Login Instead</Button>
            </form>
          </>) 
          }
      </Paper>
    </Container>
  )
}

export default Login