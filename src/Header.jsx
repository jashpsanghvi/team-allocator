const Header = (props) => {

    const { selectedTeam, teamSize } = props

    return (
			<header className="container">
				<div className="row justify-content-center mt-3 mb-4">
					<div className="col-8">
						<h1>Team Allocation</h1>
						<h3>{selectedTeam} has {teamSize} members</h3>
					</div>
				</div>
			</header>
    )

}

export default Header