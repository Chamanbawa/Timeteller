import React from 'react';
import { useTotalHours } from '../Context/TotalHoursContext'
function DisplayHours() {
    const {totalHours} = useTotalHours();
  return (
    <div>Weekly Hours:{totalHours}</div>
  )
}

export default DisplayHours;