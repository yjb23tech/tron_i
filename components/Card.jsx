import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {
    return (
        <div>
            <div>
                <img src={`images/${props.album_song_cover_art}`} />
            </div>
            <div>
                <h2>Placeholder</h2>
                <div>
                    <img src={album_icon} />
                    <p>{props.album_title_name}</p>
                </div>
                <div>
                    <img src={artist_icon} />
                    <p>{props.album_artist_name}</p>
                </div>
                <div>
                    <img src={genre_icon} />
                    <p>{props.album_genre_name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card; 