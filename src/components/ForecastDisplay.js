import DetailedForecastDisplay from "../components/DetailedForecastDisplay"
import NextWeek from "./NextWeek"


const ForecastDisplay = ({forecast, interDay, next}) => {

    var show = false

    

    
        


    //<img width="45" src={forecast.weatherIcon} /> 

    return (
        <div className="container">
            
            <div className="dailyWeather">
                
                <h1 style={{marginBottom: "0px"}}>{forecast.weekday}</h1>
                <h4 style={{marginTop:"0px"}}>{forecast.date}</h4>
                <h1>{forecast.temperature} {'\u00b0'}C </h1>
                <h1 style={{marginBottom: "0px"}}>{forecast.location}</h1>
                <h4 style={{marginTop: "0px"}}>{forecast.weatherDescription}</h4>
                

            </div>

            <div className="humidity">
             <DetailedForecastDisplay interDay = {interDay} />
             <NextWeek next ={next}/>
             
            </div>


            
            
        
        </div>
    )
}

export default ForecastDisplay
