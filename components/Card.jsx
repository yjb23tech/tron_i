

const Card = (props) => {
    return (
        <div>
            <div>
                <img src={`images/${props.album_song_cover_art}`} />
            </div>
            {/* <div>
                <h2></h2>
                <div>
                    <img />
                    <p></p>
                </div>
                <div>
                    <img />
                    <p></p>
                </div>
                <div>
                    <img />
                    <p></p>
                </div>
            </div> */}
        </div>
    )
}

export default Card; 