import React from 'react'
import './Signup.css'

import { Link } from 'react-router-dom'
import Dateofbirth from './Dateofbirth'
import { Button, TextField } from '@material-ui/core'

function Signup() {
    return (
        <div className="signup">
            <h2>First Time?</h2>
            <form noValidate autoComplete="off">
            <div className="input__field">
                <TextField className="form__input" required id="outlined-basic" label="First Name" variant="outlined" />
            </div>
            <div className="input__field">
                <TextField className="form__input" required id="outlined-basic" label="Last Name" variant="outlined" />
            </div>
            <h3>Date of Birth:</h3>
            <input type="date"/>
            <div className="dateofbirth">               
            {/* <Dateofbirth label="Year"/>
            <Dateofbirth label="Month"/>
            <Dateofbirth label="Day"/> */}
            </div>
            
            <div className="button__forgot">
                <Button variant="contained" color="primary">
                    Continue Registration 
                </Button>
            </div>
            </form>
        </div>
    )
}

export default Signup
