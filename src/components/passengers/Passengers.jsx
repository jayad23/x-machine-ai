import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import { FormGroup, Input } from 'reactstrap'

const Passengers = ({ handleNames }) => {
    const [numberOfPs, setNumberOfPs] = useState(null);

    const handleChange = (value) => {
        let count = 0;
        const passengers = []
        for (let i = 0;i < value;i++) {
            count += 1
            const pushedValue = `Name of passenger ${count}`;
            const name = `passanger_number_${count}`
            passengers.push({ id: count, val: pushedValue, name });
        }
        setNumberOfPs(passengers);
    }

    return (
        <FormControl fullWidth>
            <InputLabel color='secondary' fullWidth id="demo-simple-select-label">How many people are traveling?</InputLabel>
            <Select
                fullWidth
                sx={{ minWidth: "320px" }}
                color="secondary"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="How many people are traveling?"
                onChange={(e) => handleChange(e.target.value)}>
                <MenuItem>
                    How many are you traveling?
                </MenuItem>
                {
                    [1, 2, 3, 4, 5].map(numberOfPassengers => (
                        <MenuItem value={numberOfPassengers} key={numberOfPassengers}>
                            {numberOfPassengers}
                        </MenuItem>
                    ))
                }
            </Select>
            {
                numberOfPs &&
                <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
                    {
                        numberOfPs.map((psgrs, index) => (
                            <TextField key={psgrs.id} label={psgrs.val} name={psgrs.name} onChange={handleNames} sx={{ marginTop: "10px" }} />
                        ))
                    }
                </Box>
            }
        </FormControl>
    )
}

export default Passengers