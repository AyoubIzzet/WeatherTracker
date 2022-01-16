const imgUrlBase = "https://www.metaweather.com/static/"

const NextWeekDisplay = ({weekday, temperature, imgUrl}) => {
    return (
        <div >
            <img width={"30"} src={`${imgUrlBase}img/weather/${imgUrl}.svg`} />
            <h3 style={{margin:0}}>{weekday}</h3>
            <h3 style={{margin:0}}>{temperature}&deg;</h3>
            
        </div>
    )
}

export default NextWeekDisplay
