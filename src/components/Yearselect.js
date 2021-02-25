import React from 'react'
import {FormControl, InputLabel, Select} from '@material-ui/core'
import './Dob.css'
function Yearselect() {
    return (
        <div className="dob">
        <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Year</InputLabel>
        <Select
          native
          label={label}
          inputProps={{
            name: "Year",
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" selected disabled>&emsp;&emsp;&emsp;</option>
          <option value={1}>Jan</option>
          <option value={2}>Feb</option>
          <option value={3}>Mar</option>
          <option value={4}>Apr</option>
          <option value={5}>May</option>
          <option value={6}>Jun</option>
          <option value={7}>Jul</option>
          <option value={8}>Aug</option>
          <option value={9}>Sep</option>
          <option value={10}>Oct</option>
          <option value={11}>Nov</option>
          <option value={12}>Dec</option>
        </Select>
        </FormControl>
        </div>
    )
}

export default Yearselect
