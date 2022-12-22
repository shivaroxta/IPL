import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="team">
        <h1 className="team-heading">{competingTeam}</h1>
        <p className="team-date">{date}</p>
        <p className="team-venue">{venue}</p>
        <p className="team-opposite">{matchStatus}</p>
      </div>
      <div className="team-logo-container">
        <img src={competingTeamLogo} className="team-logo" alt="team logo" />
      </div>
      <div className="latest-result">
        <p className="first-innings">First Innings</p>
        <p className="first-innings">{firstInnings}</p>
        <p className="first-innings">Second Innings</p>
        <p className="first-innings">{secondInnings}</p>
        <p className="first-innings">Man Of The Match</p>
        <p className="first-innings">{manOfTheMatch}</p>
        <p className="first-innings">Umpires</p>
        <p className="first-innings">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
