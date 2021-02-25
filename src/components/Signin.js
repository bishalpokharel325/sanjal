import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'

function Signin() {
    return (
        <div className="signin">
            <form noValidate autoComplete="off">
            <div className="input__field">
                <TextField className="form__input" required id="outlined-basic" label="Username Email or Phone No" variant="outlined" />
            </div>
            <div className="input__field">
                <TextField className="form__input" required id="outlined-basic" label="Password" variant="outlined" />
            </div>
            
            
            <div className="button__forgot">
                <Button variant="contained" color="primary">
                    Sign In
                </Button>
                 <Link className="forgot__password">Forgot Password</Link>
            </div>
            </form>
        </div>
    )
}

export default Signin
