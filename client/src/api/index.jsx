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
export const setAccessToken = () => localStorage.setItem("access_token", getTokensFromHash().accessToken);
export const setRefreshToken = () => localStorage.setItem("refresh_token", getTokensFromHash().refreshToken);

//Getting the access and refresh tokens from local storage
export const getAccessToken = () => localStorage.getItem("access_token");
export const getRefreshToken = () => localStorage.getItem("refresh_token");


export const refreshAccessToken = async () => {
    const res = await axios.get(
        `http://localhost:8888/refresh_token?refresh_token=${getRefreshToken()}`
    );
    localStorage.setItem("access_token", res.data.access_token);
    // location.reload();
    return;
};

export const logout = () => {
    localStorage.removeItem("token_timestamp");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    location.reload();
};

const token = getAccessToken();

console.log(token);

const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
};

export const getUser = async () =>
    await axios
        .get("https://api.spotify.com/v1/me", {
            headers,
        })
        .then((res) => console.log(res.data));
