import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  return (
    <li className="match-card-list-items">
      <img
        src={competingTeamLogo}
        alt="competing team logo"
        className="competing-team-logo"
      />
      <h1 className="competing-team-name">{competingTeam}</h1>
      <p className="competing-team-result">{result}</p>
      <p className="competing-team-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
