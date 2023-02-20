import React, { useContext } from 'react'
import DataContext from './Content';

function Header() {
    
    const {city,setCity} = useContext(DataContext);
    
  return (
    <div id='header'>
        <div id='head'>
            <h2>Weather App</h2>
        </div>

        <div id='city'> 

        <select id='cityOption' name='country' value={city} onChange={e => setCity(e.target.value)}>
            <option value='Istanbul' >Istanbul</option>
            <option defaultValue='Izmir' >Izmir</option>
            <option value='Van'>Van</option>
            <option value='Ankara'>Ankara</option>
            <option value='Antalya'>Antalya</option>
            <option value='Artvin'>Artvin</option>
          </select>
          
        
         </div>
      
    </div>
  )
}

export default Header
