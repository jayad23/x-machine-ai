import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Search = ({ setSearch, countries }) => {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel color='secondary' fullWidth id="demo-simple-select-label">Choose a destionation</InputLabel>
                <Select
                    fullWidth
                    sx={{ minWidth: "320px" }}
                    color="secondary"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Choose a destination"
                    onChange={(e) => e.target.value === "Please, select from options."
                        ?
                        null :
                        setSearch(e.target.value)}
                >
                    <MenuItem disabled value={0}>Choose a destination</MenuItem>
                    {countries?.map((country) =>
                        <MenuItem
                            key={country.name.common}
                            value={country.name.common}
                        >
                            {country.name.common}
                        </MenuItem>)
                    }
                </Select>
            </FormControl>
        </Box>
    )
}

export default Search