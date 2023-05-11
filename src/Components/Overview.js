import React from 'react'
import { useSelector } from 'react-redux'
import {selectDisplay} from "../redux/slices/displayCountrySlice"

function Overview() {
  let currentDisplay = useSelector(selectDisplay)
  return (
    <div className='stack'>Overview</div>
  )
}

export default Overview