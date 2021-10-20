import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {

  const valueArray = props.dataPoints.map(point => point.value);
  console.log(valueArray)
  const totalMax = Math.max(...valueArray)

  return (
    <div className="chart">
    {
      props.dataPoints.map((dataPoint) => {
        return (<ChartBar 
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />)
      })
    }
    </div>
  );

}

export default Chart;