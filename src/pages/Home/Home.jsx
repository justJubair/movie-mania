import Banner from "../../components/Banner/Banner"
import Row from "../../components/Row/Row"
import requests from "../../request"


const Home = () => {
  return (
    <div>
      <Banner/>
      <Row title='Upcoming' fetchURL={requests.requestUpcoming}/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='Trending' fetchURL={requests.requestTrending}/>
      <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row title ='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home
