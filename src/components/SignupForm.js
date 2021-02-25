import React from 'react'
import './Signupform.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button, TextField } from '@material-ui/core';

function SignupForm() {
    return (
        <div className="signupform">
            <Tabs>
    <TabList>
      <Tab>Login Informations</Tab>
      <Tab>Personal Informations</Tab>
      <Tab>Educational Background</Tab>
      <Tab>Work Life</Tab>
      <Tab>Profile and Cover Pics</Tab>
      <Tab>Submit</Tab>
    </TabList>
        <form>
    <TabPanel className="logininfo">
      <TextField className="form__input" required id="outlined-basic" label="Username" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Email" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Password" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Retype Password" variant="outlined" />
    </TabPanel>
    <TabPanel className="personal">
      <TextField className="form__input" required id="outlined-basic" label="First Name" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Date of Birth" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Gender" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Current Address" variant="outlined" />
    </TabPanel>
    <TabPanel className="education">
      <TextField className="form__input" required id="outlined-basic" label="High School" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Undergrad School" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Masters" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="PHD" variant="outlined" />
     
    </TabPanel>
    <TabPanel className="worklife">
       <TextField className="form__input" required id="outlined-basic" label="Current Work" variant="outlined" />
      <TextField className="form__input" required id="outlined-basic" label="Designation" variant="outlined" />
      
    </TabPanel>
    <TabPanel className="profilepic">
      <input type="file"/>
      <input type="file"/>
    </TabPanel>
    <TabPanel className="submit">
      <h2>Terms and Conditions:</h2>
     <div className="terms">
        <span>Lorem Ipsum comes from sections 1.10.32 and 1</span>
     </div>
     <div className="terms__check">
        <label>Sign Terms and Conditions here:</label>
        <input type="checkbox"/>
     </div>
     
     <Button className="btn">Submit</Button>
    </TabPanel>
        </form>
  </Tabs>
        </div>
    )
}

export default SignupForm
