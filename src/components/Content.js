import {createContext, useState} from 'react'


const DataContext = createContext();


export const DataProvider = ({children}) =>{
    const [city, setCity] = useState("Izmir")
    
    const weatherData = getData(city)
    
    const values = {
        city,
        setCity,
        weatherData,
    };
    return(
        <DataContext.Provider value={values}>{children}</DataContext.Provider>
    )

}
async function getData(city){
    const data = await (await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e76da8cb8d2143dd70cfbebdf7c53be9&units=metric`)).json()   
    return data;
  }


export default DataContext;
