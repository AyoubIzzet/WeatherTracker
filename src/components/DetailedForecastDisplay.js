import React from 'react'
import Chart from './Chart'


const DetailedForecastDisplay = ({interDay}) => {
    return (
        <div>
            {interDay.map((item) => (
                <Chart {...item} key={item.name} />
            ))}
           
                
            
        </div>
    )
}

export default DetailedForecastDisplay
