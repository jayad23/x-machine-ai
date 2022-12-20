import { Box, Typography } from '@mui/material';
import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5"
const Success = ({ state }) => {
    return (
        <Box component="div" textAlign="center">
            <IoCheckmarkCircleSharp size={102} color="#45ea0f" />
            <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
                {
                    state.context.namesOfPassengers &&
                    state.context.namesOfPassengers.length > 0 &&
                    state.context.namesOfPassengers.map((person, index) => (
                        <Typography
                            key={index}
                            variant="subtitle1" component="div" color="black"
                            sx={{ fontWeight: "bolder", marginTop: "10px" }}
                        >
                            {person[`passanger_number_${index + 1}`]}
                        </Typography>
                    ))
                }
            </Box>
        </Box >
    )
}

export default Success