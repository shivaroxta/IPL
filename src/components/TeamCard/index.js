import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  // eslint-disable-next-line
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="list-items ">
        <img src={teamImageUrl} alt="team logo" className="team-logo" />
        <p className="team-title">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
