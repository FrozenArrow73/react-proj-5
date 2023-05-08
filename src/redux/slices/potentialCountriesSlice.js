import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
    name: `potentialCountries`,
    initialState: {
        value: { 
            //possible error here Project part 2, step 4, step
            name: [{}]
        }
    },
    reducers: {
        setPotentialCountries: () => {},
        deletePotentialCountries: () => {}
    }
})