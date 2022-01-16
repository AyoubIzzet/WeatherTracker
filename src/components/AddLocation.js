import { useState } from "react"
const AddLocation = ({selectCity}) => {

    const [city, setCity] = useState("")


    const onSubmit = (e) => {
        e.preventDefault()

        selectCity (city)
        setCity("")


    }

    return (
        <div className="locationForm">
           
            <div className="myForm">
                <form onSubmit={onSubmit}>
                    <input className= "locationEntery" type="text" placeholder="Enter your city" value={city} 
                    onChange={(e) => setCity(e.target.value)}/>
                    <input type="submit" value="SEARCH" className="submitButton" />
                </form>
                
            </div>
          
        </div>

    )

    
}

export default AddLocation
