import {useState, useEffect} from 'react'
// eslint-disable-next-line
import LatestMatch from '../LatestMatch'
// eslint-disable-next-line
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = props => {
  // eslint-disable-next-line
  const [matches, setMatches] = useState([])
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true)
  const getTeamItems = async () => {
    const {match} = props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()

    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: {
        id: fetchedData.latest_match_details.id,
        competingTeam: fetchedData.latest_match_details.competing_team,
        competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
        date: fetchedData.latest_match_details.date,
        firstInnings: fetchedData.latest_match_details.first_innings,
        manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
        matchStatus: fetchedData.latest_match_details.match_status,
        result: fetchedData.latest_match_details.result,
        secondInnings: fetchedData.latest_match_details.second_innings,
        umpires: fetchedData.latest_match_details.umpires,
        venue: fetchedData.latest_match_details.venue,
      },
      recentMatches: fetchedData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    setMatches(updatedData)
    setIsLoading(false)
  }

  useEffect(() => {
    getTeamItems()
  })

  return (
    <div className="team-matches-container">
      <img src={matches.teamBannerUrl} className="team-banner" alt="img" />

      <LatestMatch
        key={matches.latestMatchDetails.id}
        latestMatchDetails={matches.latestMatchDetails}
      />
    </div>
  )
}

export default TeamMatches
