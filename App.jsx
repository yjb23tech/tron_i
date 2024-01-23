import {createRoot} from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <h1>Sanity Check</h1>
            <Card 
                album_song_cover_art = "track_9_song_art.png"
                album_title_name = "My Beautiful Dark Twisted Fantasy"
                album_artist_name = "Kanye West"
                album_genre_name = "Baroque Sophisticated Ignorance"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)