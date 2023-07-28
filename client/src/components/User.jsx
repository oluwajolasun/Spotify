import { useEffect, useState } from "react"
import { getUser, getUserTop5Artist, getUserTop5Tracks, logout } from "../api"

import { UserDiv, UserName, UserProfile, UserImage, Stats, StatItem, UserTops, Artist, ArtistImage, Track, TrackImage, TopTitle} from "../components/styles/User.styled"



const User = () => {

    const [user, setUser] = useState("")
    const [top5Artist, setTop5Artist] = useState("")
    const [top5Track, setTop5Track] = useState("")

    useEffect(() => {

        const fetchGetUser = async () => {
            await getUser()
                .then((res) => {
                    console.log(res.data)
                    setUser(res.data)
                })
        }
        fetchGetUser()

        const fetchGetUserTop5Artist = async () => {
            await getUserTop5Artist()
                .then((res) => {
                    console.log(res.data)
                    setTop5Artist(res.data)
                })
        }
        fetchGetUserTop5Artist()

        const fetchGetUserTop5Tracks = async () => {
            await getUserTop5Tracks()
                .then((res) => {
                    console.log(res.data)
                    setTop5Track(res.data)
                })
        }
        fetchGetUserTop5Tracks()
    }, [])

    const handleLogout = () => {
        logout()
    }

    return (
        <UserDiv>
            { user ?
                <UserProfile>
                    <div style={ { paddingRight: "3rem" } }>
                        <UserImage src={ user.images[1].url } />
                    </div>
                    <div style={ { paddingLeft: "3rem" } }>
                        <UserName>
                            { user.display_name }
                        </UserName>
                        <Stats>
                            <StatItem>
                                <div>
                                    followers
                                </div>
                                <div>
                                    999
                                </div>
                            </StatItem>
                            <StatItem>
                                <div>
                                    following
                                </div>
                                <div>
                                    { user.followers.total }
                                </div>
                            </StatItem>
                        </Stats>
                        <button onClick={ handleLogout }>LOG OUT</button>
                    </div>
                </UserProfile> : <p>Loading...</p> }
            <UserTops>
                <div>
                    <TopTitle>Top 5 Artists</TopTitle>
                    <div>
                        { top5Artist ?
                            <div>
                                { top5Artist.items.map((item) => (
                                    <Artist key={ item.id }>
                                        <div to={ `/artist/${item.id}` }>
                                            { item.images.length && <ArtistImage src={ item.images[2].url } alt="Artist" /> }
                                        </div>
                                        <div>
                                            <p style={ { textAlign: "right" } }>{ item.name }</p>
                                        </div>
                                    </Artist>
                                )) }
                            </div> :
                            <p>Loading...</p> }
                    </div>

                    <div>

                    </div>
                </div>

                <div>
                    <TopTitle>Top 5 Tracks</TopTitle>
                    <div>
                        { top5Track ?
                            <div>
                                { top5Track.items.map((item) => (
                                    <Track key={ item.id }>
                                        <div to={ `/artist/${item.id}` }>
                                            { item.album.images.length && <TrackImage src={ item.album.images[0].url } alt="Track" /> }
                                        </div>
                                        <div>
                                            <p style={ { textAlign: "right" } }>{ item.name }</p>
                                        </div>
                                    </Track>
                                )) }
                            </div> :
                            <p>Loading...</p> }
                    </div>

                    <div>

                    </div>
                </div>

            </UserTops>
        </UserDiv>
    )
}
export default User