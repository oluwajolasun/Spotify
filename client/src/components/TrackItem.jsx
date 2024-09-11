/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { convertMsToMinutesSeconds } from "../utils";
import {
  TrackItemDiv,
  TrackDetails,
  TrackImage,
  TrackInfo,
  TrackArtist,
  TrackTitle,
} from "./styles/TrackItem.styled";

const TrackItem = (props) => {
  return (
    <TrackItemDiv>
      <TrackInfo>
        <Link to={props.track.external_urls.spotify} target="_blank">
          <TrackImage
            src={
              props.track.album.images.length && props.track.album.images[1].url
            }
          />
        </Link>
        <div>
          <TrackTitle>{props.track.name}</TrackTitle>
          <TrackArtist>{props.track.album.artists[0].name}</TrackArtist>
        </div>
      </TrackInfo>
      <div>
        <TrackDetails>
          {convertMsToMinutesSeconds(props.track.duration_ms)}
        </TrackDetails>
      </div>
    </TrackItemDiv>
  );
};
export default TrackItem;
