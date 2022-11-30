import femaleProfile from "./assets/femaleProfile.jpg";
import maleProfile from "./assets/maleProfile.jpg"

const Employees = (props) => {

  const { employees, teams, selectedTeam, handleTeamChangeEvent, handleCardClickEvent } = props

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-6">
          <select className="form-select form-select-lg" style={{ cursor : "pointer"}} value={selectedTeam}
            onChange={handleTeamChangeEvent}>
            {
              teams.map((teamName) => (
                <option value={teamName}>{teamName}</option>
              ))
            }
          </select>
        </div>
        <div className="row-8">
          <div className="card-collection">
            {
              employees.map((employee) => (
                  <div id={employee.id} className={(employee.teamName === selectedTeam)?"card m-2 standout":
                    "card m-2"} style={{cursor : "pointer"}} onClick={handleCardClickEvent}>
                    {(employee.gender === 'male')?<img src={maleProfile} className="card-image-top"/>
                                                  :<img src={femaleProfile} className="card-image-top"/>}                          
                    <div className="card-body">
                      <h5 className="card-title">Employee Name: {employee.fullName}</h5>
                      <p className="card-text">Designation: {employee.designation}</p>
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees