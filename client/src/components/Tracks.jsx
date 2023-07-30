import { useEffect, useState } from "react"
import { getUserTopTrackShortTerm, getUserTopTrackMediumTerm, getUserTopTrackLongTerm } from "../api"
import { Container } from '../components/styles/TrackItem.styled'
import TrackItem from "./TrackItem"
import Loader from "./Loader"
import { Title } from "./styles/TrackItem.styled"
const Tracks = () => {

    // const [shortTermTrack, setShortTermTrack] = useState("")
    // const [mediumTermTrack, setMediumTermTrack] = useState("")
    const [longTermTrack, setLongTermTrack] = useState("")

    useEffect(() => {
        const fetchShortTerm = async () => {
            await getUserTopTrackShortTerm()
                .then((res) => {
                    console.log(res.data.items)
                    // setShortTermTrack(res.data.items)
                })
        }
        fetchShortTerm()

        const fetchMediumTerm = async () => {
            await getUserTopTrackMediumTerm()
                .then((res) => {
                    console.log(res.data.items)
                    // setMediumTermTrack(res.data.items)
                })
        }
        fetchMediumTerm()

        const fetchLongTerm = async () => {
            await getUserTopTrackLongTerm()
                .then((res) => {
                    console.log(res.data.items)
                    setLongTermTrack(res.data.items)
                })
        }
        fetchLongTerm()
    }, [])


    return (<>
        <Title>Top Tracks</Title>
        <Container>
            { longTermTrack ? longTermTrack.map((track) =>
                <TrackItem key={ track.id } track={ track } />)
                : <Loader /> }
        </Container>
    </>
    )
}
export default Tracks