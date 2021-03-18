import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TokenContext, UserContext } from '../App'
import './Signin.css'
function Signin() {
    const {user,setUser}=useContext(UserContext)
    const {token,setToken}=useContext(TokenContext)
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const onChangeHandle=(e)=>{
        const newdata={...data}
        newdata[e.target.name]=e.target.value
        setData(newdata)
    }
    const onClickHandle=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:7000/api/users/signIn",data)
        .then(res=>{
            console.log(res)
            setUser(res.data.user)
            setToken(res.data.token)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <div className="signin">
            <form noValidate autoComplete="off" onClick={(e)=>onClickHandle(e)}>
            <div className="input__field">
                <TextField value={data.email} name="email" onChange={(e)=>onChangeHandle(e)} className="form__input" required id="outlined-basic" label="Username Email or Phone No" variant="outlined" />
            </div>
            <div className="input__field">
                <TextField value={data.password} onChange={(e)=>onChangeHandle(e)} name="password" className="form__input" required id="outlined-basic" label="Password" variant="outlined" />
            </div> 
            <div className="button__forgot">
                <Button variant="contained" color="primary" type="submit">
                    Sign In
                </Button>
                 <Link className="forgot__password">Forgot Password?</Link>
                 <Link to="/news" style={{textDecoration:'none',color:'inherit'}}>
                <Button variant="contained" color="primary">
                    Demo Login
                </Button>
                </Link>

            </div>
            </form>
        </div>
    )
}

export default Signin
