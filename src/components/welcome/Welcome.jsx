import React from 'react'
import { Button, Box, Typography } from '@mui/material'

const Welcome = ({ send }) => {
    const handleStart = () => {
        send("START")
    }

    return (
        <Box component="div">
            <Typography variant="title" component="h1">Welcome to flight booking with machine state</Typography>
            <Button onClick={handleStart} variant="contained" size="large" color="secondary" >Start</Button>
        </Box>
    )
}
export default Welcome