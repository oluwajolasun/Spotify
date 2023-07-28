import { useEffect, useState } from "react"
import { getUserPlaylists } from "../api"
import { Container, PlaylistDiv, PlaylistItem, PlaylistName, PlaylistImage, PlaylistTotalCount } from "./styles/Playlist.styled";


const Playlists = () => {

    const [playlists, setPlaylists] = useState("")

    useEffect(() => {
        const fetchUserPlaylists = async () => {
            await getUserPlaylists()
                .then((res) => {
                    console.log(res.data)
                    setPlaylists(res.data.items)
                })
        }
        fetchUserPlaylists()
    }, [])


    return (<>
        <h2>Your playlist</h2>
        <Container>
            <PlaylistDiv>
                { playlists ? (playlists.map((playlist) =>
                    <PlaylistItem key={ playlist.id }>
                        <PlaylistImage src={ playlist.images.length && playlist.images[0].url } />
                        <PlaylistName >{ playlist.name }</PlaylistName>
                        <PlaylistTotalCount>{ playlist.tracks.total }</PlaylistTotalCount>
                    </PlaylistItem>
                )) : (
                    <p>Loading...</p>
                ) }
            </PlaylistDiv>
        </Container>
    </>
    )
}
export default Playlists