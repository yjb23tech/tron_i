import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {
    return (
        <div className="album-song-card">
            <img src={`images/${props.album_song_cover_art}`} className="util-box-border-green"/>
            <div className="album-song-contents util-box-border-blue">
                <h2>{props.album_song_name}</h2>
                <div className="info-group util-box-border-red">
                    <img src={album_icon} />
                    <p>{props.album_title_name}</p>
                </div>
                <div className="info-group util-box-border-red">
                    <img src={artist_icon} />
                    <p>{props.album_artist_name}</p>
                </div>
                <div className="info-group util-box-border-red">
                    <img src={genre_icon} />
                    <p>{props.album_genre_name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card; 