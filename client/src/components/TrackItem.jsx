/* eslint-disable react/prop-types */
import { convertMsToMinutesSeconds } from "../utils"
import { TrackItemDiv, TrackDetails, TrackImage, TrackInfo, TrackArtist, TrackTitle } from "./styles/TrackItem.styled"

const TrackItem = (props) => {
    return (
        <TrackItemDiv>
            <TrackInfo>
                <TrackImage src={ props.track.album.images.length && props.track.album.images[1].url } />
                <div>
                    <TrackTitle>{ props.track.name }</TrackTitle>
                    <TrackArtist>{ props.track.album.artists[0].name }</TrackArtist>
                </div>
            </TrackInfo>
            <div>
                <TrackDetails>{ convertMsToMinutesSeconds(props.track.duration_ms) }</TrackDetails>
            </div>
        </TrackItemDiv>
    )
}
export default TrackItem