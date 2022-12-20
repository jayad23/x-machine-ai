import React, { Fragment } from 'react'
import { Button } from 'reactstrap'

const Welcome = ({ send }) => {
    const handleStart = () => {
        send("START")
    }
    return (
        <div>
            <h1>Welcome to flight booking with machine state</h1>
            <Button onClick={handleStart} size='small'
                style={{
                    backgroundColor: "purple",
                    width: "20%",
                    padding: "10px"
                }}>
                Start
            </Button>
        </div>
    )
}
export default Welcome