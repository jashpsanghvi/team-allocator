import './App.css'
import Header from './Header'
import Footer from './Footer'
import Employees from './Employees'
import { useState } from 'react'

function App() {

  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "Aurora"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "Aurora"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "Aurora"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "Dynamo"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "Dynamo"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "Dynamo"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "Kinesis"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "Kinesis"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "Kinesis"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "Lambda"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "Lambda"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "Lambda"
  }])

  const teams = ["Aurora", "Dynamo", "Kinesis", "Lambda"]

  const [selectedTeam, setTeam] = useState("Kinesis")

  const handleTeamChangeEvent = (event) => {
    setTeam(event.target.value)
  }

  const handleCardClickEvent = (event) => {
    const transformedEmployees = employees.map((employee) => {
      if (employee.id === parseInt(event.currentTarget.id)) {
        if (employee.teamName === selectedTeam) {
          employee.teamName = ""
        } else {
          employee.teamName = selectedTeam
        }
      }
      return employee
    })
    setEmployees(transformedEmployees)
  }

  return (
    <div>
      <Header selectedTeam={selectedTeam}
        teamSize={employees.filter(employee => employee.teamName === selectedTeam).length}/>
      <Employees employees={employees}
        teams={teams}
        selectedTeam={selectedTeam}
        handleTeamChangeEvent={handleTeamChangeEvent}
        handleCardClickEvent={handleCardClickEvent}/>
      <Footer/>
    </div>
  )
}

export default App
