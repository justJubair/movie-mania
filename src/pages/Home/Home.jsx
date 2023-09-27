import Banner from "../../components/Banner/Banner"
import Row from "../../components/Row/Row"
import requests from "../../request"


const Home = () => {
  return (
    <div>
      <Banner/>
      <Row rowId='1' title='Upcoming' fetchURL={requests.requestUpcoming}/>
      <Row rowId='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowId='3' title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowId='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowId='5' title ='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home
