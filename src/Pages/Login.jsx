import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <Box sx={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{height: 300, width: 400, boxShadow: 'black 0px 0px 20px', borderRadius: '20px'}}>
      <Typography variant='h4' sx={{textAlign: 'center', mt: 2}}>
         Login
      </Typography>

      <Box sx={{width: 300, mx: 'auto'}}>
      <Box sx={{mt: 2}}>
        <TextField fullWidth size='small' label="Username"></TextField>
        </Box>

        <Box sx={{mt:2}}>
        <TextField fullWidth size='small' label="Password" type='password'></TextField>
        </Box>

        <Box sx={{mt:2, textAlign: 'center', }}>
        <Button variant='contained'>Login</Button>
        </Box>
        
        <Box sx={{mt: 3}}>
        
            <Link to="/Register">
                <Typography>
                   Don't have an Account yet?
                </Typography> 
            </Link>
            </Box>

      </Box>


      </Box>
        
    </Box>
  )
}
