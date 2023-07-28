import { useEffect, useState } from "react"
import { getUserTopArtistShortTerm, getUserTopArtistMediumTerm, getUserTopArtistLongTerm } from "../api"
import { ArtistDiv, ArtistImage, ArtistName, ArtistItem, Container } from '../components/styles/Artist.styled'
const Artists = () => {

    // const [shortTermArtist, setShortTermArtist] = useState("")
    // const [mediumTermArtist, setMediumTermArtist] = useState("")
    const [LongTermArtist, setLongTermArtist] = useState("")

    useEffect(() => {
        const fetchShortTerm = async () => {
            await getUserTopArtistShortTerm()
                .then((res) => {
                    console.log(res.data)
                    setShortTermArtist(res.data.items)
                })
        }
        fetchShortTerm()

        const fetchMediumTerm = async () => {
            await getUserTopArtistMediumTerm()
                .then((res) => {
                    console.log(res.data)
                    setMediumTermArtist(res.data.items)
                })
        }
        fetchMediumTerm()

        const fetchLongTerm = async () => {
            await getUserTopArtistLongTerm()
                .then((res) => {
                    console.log(res.data)
                    setLongTermArtist(res.data.items)
                })
        }
        fetchLongTerm()
    }, [])


    return (<>
        <h2>Top Artist</h2>
        <Container>
            <ArtistDiv>
                { LongTermArtist ? LongTermArtist.map((artist) =>
                    <ArtistItem key={ artist.id }>
                        <ArtistImage src={ artist.images.length && artist.images[1].url } />
                        <ArtistName >{ artist.name }</ArtistName>
                    </ArtistItem>) : <p>loading...</p> }
            </ArtistDiv>
        </Container>
    </>
    )
}
export default Artists