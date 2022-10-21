import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongDetails = props => {
  const {songDetails, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDeleteButton = () => {
    onClickDelete(id)
  }

  return (
    <li className="song-card">
      <div className="image-and-details">
        <img src={imageUrl} alt="track" className="song-image" />
        <div className="song-details">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete">
        <p className="duration">{duration}</p>
        <button
          className="delete-button"
          type="button"
          onClick={onClickDeleteButton}
          testid="delete"
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default SongDetails
