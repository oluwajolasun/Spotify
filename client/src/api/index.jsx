import axios from "axios";


//Get Tokens from the URL which was redirected from Express JS
export const getTokensFromHash = () => {
    const hashParams = new URLSearchParams(location.hash.substr(1));
    const accessToken = hashParams.get("access_token");
    const refreshToken = hashParams.get("refresh_token");

    return {
        accessToken,
        refreshToken
    }
};

//Setting the access and refresh token to local storage
export const setAccessToken = () => {
    localStorage.setItem("access_token", getTokensFromHash().accessToken)
    return getTokensFromHash().accessToken
};

export const setRefreshToken = () => localStorage.setItem("refresh_token", getTokensFromHash().refreshToken);

//Getting the access and refresh tokens from local storage
export const getAccessToken = () => localStorage.getItem("access_token");
export const getRefreshToken = () => localStorage.getItem("refresh_token");

export const accessToken = setAccessToken()

// export const refreshAccessToken = async () => {
//     const res = await axios.get(
//         `http://localhost:8888/refresh_token?refresh_token=${getRefreshToken()}`
//     );
//     localStorage.setItem("access_token", res.data.access_token);
//     // location.reload();
//     return;
// };

export const logout = () => {
    console.log(import.meta.env)
    if (import.meta.env.MODE === "development") {
        localStorage.clear()
        location.href = import.meta.env.VITE_FRONTEND_URI
    } else {
        localStorage.clear()
        location.href = "https://spotify-web-companion.netlify.app/";
    }
    
    // location.href = import.meta.VITE_FRONTEND_URI || "https://spotify-web-companion.netlify.app/";
};


const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
};

//================= API CALLS =================

export const getUser = async () =>
    await axios
        .get("https://api.spotify.com/v1/me", {
            headers,
        })

export const getUserFollowing = async () =>
    await axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers });

export const getUserTop5Artist = async () =>
    await axios
        .get("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=5", {
            headers,
        })

export const getUserTop5Tracks = async () =>
    await axios
        .get("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5", {
            headers,
        })


//Get Top Artist Short, Medium and Long Term
export const getUserTopArtistShortTerm = async () =>
    await axios
        .get("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=20", {
            headers,
        })

export const getUserTopArtistMediumTerm = async () =>
    await axios
        .get("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=20", {
            headers,
        })

export const getUserTopArtistLongTerm = async () =>
    await axios
        .get("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=20", {
            headers,
        })

//Get Top Tracks Short, Medium and Long Term
export const getUserTopTrackShortTerm = async () =>
    await axios
        .get("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20", {
            headers,
        })

export const getUserTopTrackMediumTerm = async () =>
    await axios
        .get("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=20", {
            headers,
        })

export const getUserTopTrackLongTerm = async () =>
    await axios
        .get("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=20", {
            headers,
        })

export const getUserPlaylists = async () =>
    await axios
        .get("https://api.spotify.com/v1/me/playlists?limit=20", {
            headers,
        })

export const getHomeProfile = async () => {
    const [user, following, top5Artists, top5Tracks] = await axios.all([getUser(), getUserFollowing(), getUserTop5Artist(), getUserTop5Tracks()])
    return {
        user: user.data,
        following: following.data,
        top5Artists: top5Artists.data,
        top5Tracks: top5Tracks.data,
    }
}