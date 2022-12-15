import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main />
        <Row movieRow ="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
        <Row movieRow ="2" title="Popular" fetchURL={requests.requestPopular} />
        <Row movieRow ="3" title="Trending" fetchURL={requests.requestTrending} />
        <Row movieRow ="4" title="Top Rated" fetchURL={requests.requestTopRated} />
        <Row movieRow ="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  )
}

export default Home