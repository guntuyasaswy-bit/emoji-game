import './index.css'

const EmojiCard = props => {
  const {emojiItem, scoreCount} = props
  const {id, emojiUrl, emojiName} = emojiItem

  const clickEachEmoji = () => {
    scoreCount(id)
  }

  return (
    <li className="each-emoji-container">
      <button className="emoji-btn" type="button" onClick={clickEachEmoji}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
