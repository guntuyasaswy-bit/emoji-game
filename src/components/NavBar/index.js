import './index.css'

const NavBar = props => {
  const {count, highScore, isWin} = props
  return (
    <nav className="nav-bar-container">
      <div className="logo-score-container">
        <div className="logo-container">
          <img
            className="img-in-nav"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isWin && (
          <div className="logo-container">
            <p>Score: {count}</p>
            <p>Top Score: {highScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
