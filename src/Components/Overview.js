import React from 'react'
import { useSelector } from 'react-redux'
import {selectDisplay} from "../redux/slices/displayCountrySlice"

function Overview() {
  let currentDisplay = useSelector(selectDisplay)
  const officialNameDisplay = currentDisplay.name.official
  const commonNameDisplay = currentDisplay.name.common
  const capitalDisplay = currentDisplay.capital
  const continentDisplay = currentDisplay.continents
  const populationDisplay = currentDisplay.population
  const memberOfUnDisplay = currentDisplay.unMember ? "True" : "False"
  

  return (
    <div className='stack'>
      <h1>
        {officialNameDisplay}
      </h1>
      <h2>
        {commonNameDisplay}
      </h2>

      <h3>
        Capital: {capitalDisplay}
      </h3>
      <h3>
        Continent: {continentDisplay}
      </h3>
      <h3>
        Population: {populationDisplay}
      </h3>
      <h3>
        Is a member of the UN: {memberOfUnDisplay}
      </h3>
    </div>
  )
}

export default Overview