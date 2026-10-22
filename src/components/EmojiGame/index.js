import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
class EmojiGame extends Component {
  state = {count: [], isWin: true, highScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  setListToO = () => {
    this.setState({count: [], isWin: true})
  }

  scoreCount = id => {
    const {count, highScore} = this.state
    const newState = [...count, id]
    if (count.includes(id)) {
      this.setState({
        isWin: false,
        highScore: Math.max(highScore, newState.length) - 1,
      })
    } else if (newState.length === 12) {
      this.setState({
        count: newState,
        isWin: false,
        highScore: 12,
      })
    } else {
      this.setState({count: newState})
    }
  }

  render() {
    const {count, isWin, highScore} = this.state
    const displayEmojiOrNot = isWin ? '' : 'display-none'
    const displayWinOrLose = isWin ? 'display-none' : ''
    const emojiList = this.shuffledEmojisList()
    return (
      <>
        <div className="bg-container">
          <NavBar count={count.length} highScore={highScore} isWin={isWin} />
        </div>
        <div className="emoji-center-container">
          <ul className={`emoji-container ${displayEmojiOrNot}`}>
            {emojiList.map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                emojiItem={eachItem}
                scoreCount={this.scoreCount}
              />
            ))}
          </ul>
          <div className={displayWinOrLose}>
            <WinOrLoseCard length={count.length} setListToO={this.setListToO} />
          </div>
        </div>
      </>
    )
  }
}

export default EmojiGame
