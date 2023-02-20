import React, { useContext,useEffect,useState } from 'react'
import  '../App.css';
import DataContext from './Content';

function Weather() {
    
    const {weatherData,city} =  useContext(DataContext)
    const day = [0,8,16,24,32]
    const [data,setData] = useState({})
    const [isLoading,setLoading] = useState(true)
    console.log(weatherData)
    useEffect(()=>{
        console.log("a")
        
        weatherData.then(function(result){
        setData(result.list)
        setLoading(false)
    })
        

    },[city])
    if(isLoading){
        console.log("osmn")
        return(
            <div>

            </div>
        )
    }else{
        return (
            <div className='container'>
                
                {data.map((element,i) => {
                    if(day.includes(i) ){
        
                    
                    return (<div key={i} id={"a"+i} className='weatherBox'>
                    <div id='cityName'>
                        <span>{city}</span>
                    </div>
                    <div className='icon'>
                    <img src={`http://openweathermap.org/img/w/${element.weather[0].icon}.png`}></img>
                    </div>
                    <div className='day'>
                        <span>{element.dt_txt.slice(0,10)}</span>
                    </div>
                    <div id='temp'>
                        <span>{parseInt(element.main.temp_min)}°C</span>
                        <span>{parseInt(element.main.temp_max)}°C</span>
                    </div>
                </div>)
                    }
                })}
                
              
            </div>
          )

    }
    
  
}

export default Weather
