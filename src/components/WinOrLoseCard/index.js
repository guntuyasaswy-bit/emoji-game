import './index.css'

const WinOrLoseCard = props => {
  const {length, setListToO} = props

  if (length === 12) {
    return (
      <div className="bg-win-lose-card">
        <div className="btn-container">
          <h1 className="heading-tag">You Won</h1>
          <p className="para-1">Best Score</p>
          <p className="para ">12/12</p>
          <button className="button" onClick={setListToO} type="button">
            Play Again
          </button>
        </div>
        <div>
          <img
            className="img-tag"
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="bg-win-lose-card">
      <div className="btn-container">
        <h1 className="heading-tag">You Lose</h1>
        <p className="para-1">Score</p>
        <p className="para">{length}/12</p>
        <button className="button" onClick={setListToO} type="button">
          Play Again
        </button>
      </div>
      <div>
        <img
          alt="win or lose"
          className="img-tag"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
