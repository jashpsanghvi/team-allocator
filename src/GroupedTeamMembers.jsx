import {useState} from 'react'

const GroupedTeamMembers = (props) => {

  const {teams, setTeam, selectedTeam, employees} = props
  const initialGroupedTeam = []
  teams.forEach((team) => {
    const teamEntry = {teamName: team, members:employees.filter((employee) => employee.teamName === team),
      collapsed: (team === selectedTeam)?false:true}
    initialGroupedTeam.push(teamEntry)
  })
  const [groupedTeam, setGroupedTeam] = useState(initialGroupedTeam)

  const handleTeamClick = (event) => {
    const transformedGroupedTeam = groupedTeam.map((team) => {
      if(team.teamName === event.currentTarget.id) {
        team.collapsed = !team.collapsed
      }
      return team
    })
    setGroupedTeam(transformedGroupedTeam)
    setTeam(event.currentTarget.id)
  }

    return (
      <main className="container">
        {
          groupedTeam.map((team) => (
            <div className='card mt-2' style={{cursor:"pointer"}}>
              <h4 id={team.teamName} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
                Team Name: {team.teamName}
              </h4>
              <div className={team.collapsed? "collapse" : ""}>
                {
                  team.members.map((employee) => (
                    <div className='mt-2'>
                      <h5 className='card-title mt-2'>Full Name: {employee.fullName}</h5>
                      <p>Designation: {employee.designation}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </main>
    )

}

export default GroupedTeamMembers