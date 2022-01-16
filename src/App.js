import React, { fragment } from 'react'
import Header from './components/Header'
import AddLocation from './components/AddLocation'
import useForcast from './components/useForcast'
import ForecastDisplay from './components/ForecastDisplay'
import NextWeek from './components/NextWeek'

var show = false;


function App() {

  

  const { submitRequest, forecast, interDay, next } = useForcast();

  const selectCity = (city) => {
    
    submitRequest(city)
  }

  console.log(interDay)

  
  if (forecast.weekday !== ''){
    show = true;
  }



  
  return (
    <body className="App">
      <Header />

      {show ? <ForecastDisplay forecast = {forecast} interDay={interDay} next={next} /> : '' }
     
      <AddLocation selectCity = {selectCity} />
      
      
    </body>
  );
}

export default App;
