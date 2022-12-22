import {useState, useEffect} from 'react'

import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

const Home = () => {
  const [teamList, setTeamList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getTeamItems = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    setTeamList(updatedData)
    setIsLoading(false)
  }

  useEffect(() => {
    getTeamItems()
  })

  const renderLoader = () => (
    <div className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )
  const renderTeamCard = () => (
    <ul className="teams ">
      {teamList.map(eachItems => (
        <TeamCard key={eachItems.id} teamDetails={eachItems} />
      ))}
    </ul>
  )

  return (
    <div className="container">
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="logo"
        />
        <h1 className="title">IPL Dashboard</h1>
      </div>
      <div className="teamCard">
        {isLoading ? renderLoader() : renderTeamCard()}
      </div>
    </div>
  )
}

export default Home
