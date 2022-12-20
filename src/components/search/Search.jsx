import React, { Fragment, useState } from 'react'
import { FormGroup, Input } from 'reactstrap';

const Search = ({ setSearch, countries }) => {

    return (
        <Fragment>
            <FormGroup>
                <Input
                    type="select"
                    onChange={(e) => e.target.value === "Please, select from options."
                        ?
                        null :
                        setSearch(e.target.value)}
                >
                    <option>Choose a destination</option>
                    {countries?.map((country) =>
                        <option
                            value={country.name.common}
                            key={country.name.common}>
                            {country.name.common}
                        </option>)
                    }
                </Input>
            </FormGroup>
        </Fragment>
    )
}

export default Search