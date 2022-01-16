const Chart = ({name, value, unit}) => {
    return (

        <table>
            <tr>
                <td style={{textAlign:"left"}}>{name}</td>
                <td style={{textAlign: "right"}}>{value}&nbsp;{unit}</td>
            </tr>
        </table>
    
        

     
    
    )
}

export default Chart
