import NextWeekDisplay from "./NextWeekDisplay"
const NextWeek = ({ next }) => {
    return (
        <div className="nextWeek">
            {next.map(next =>(
                <NextWeekDisplay {...next} key={next.weekday} />
            ))}
            
        </div>
    )
}

export default NextWeek
