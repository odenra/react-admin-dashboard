import BarChartBox from "../../barChartBox/BarChartBox"
import ChartBox from "../../chartBox/ChartBox"
import TopBox from "../../components/topBox/TopBox"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import PieChartBox from "../../pieChartBox/PieChartBox"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">

      <div className="box box1"><TopBox /></div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox {...PieChartBox}/></div>
      <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box7"></div>
      <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxVisit}/></div>

    </div>
  )
}

export default Home