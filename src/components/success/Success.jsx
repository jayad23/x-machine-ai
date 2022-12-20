import React, { useState, useEffect } from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5"
import { Row, Col } from "reactstrap"
const Success = ({ state }) => {
    const keys = ["passanger_number_1", "passanger_number_2"];
    console.log(state.context.namesOfPassengers)
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <IoCheckmarkCircleSharp size={102} color="#45ea0f" />
            <div>
                {
                    state.context.namesOfPassengers &&
                    state.context.namesOfPassengers.length > 0 &&
                    state.context.namesOfPassengers.map((person, index) => (
                        <p
                            key={index}>
                            {person[`passanger_number_${ index + 1 }`]}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default Success