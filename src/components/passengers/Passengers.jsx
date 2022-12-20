import React, { useState } from 'react'
import { FormGroup, Input } from 'reactstrap'

const Passengers = ({ handleNames }) => {
    const [numberOfPs, setNumberOfPs] = useState(null);

    const handleChange = (value) => {
        let count = 0;
        const passengers = []
        for (let i = 0;i < value;i++)
        {
            count += 1
            const pushedValue = `Name of passenger ${ count }`;
            const name = `passanger_number_${ count }`
            passengers.push({ id: count, val: pushedValue, name });
        }
        setNumberOfPs(passengers);
    }

    return (
        <FormGroup>
            <Input type="select" onChange={(e) => handleChange(e.target.value)}>
                <option>
                    How many are you traveling?
                </option>
                {
                    [1, 2, 3, 4, 5].map(numberOfPassengers => (
                        <option key={numberOfPassengers}>
                            {numberOfPassengers}
                        </option>
                    ))
                }
            </Input>
            {
                numberOfPs &&
                <div className='d-flex flex-column gap-2 mt-2'>
                    {
                        numberOfPs.map((psgrs, index) => (
                            <Input key={psgrs.id} placeholder={psgrs.val} name={psgrs.name} onChange={handleNames} />
                        ))
                    }
                </div>
            }
        </FormGroup>
    )
}

export default Passengers