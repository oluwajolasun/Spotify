const EXPIRES_IN = 3600 * 1000;

export const getTokensFromHash = () => {
  const hashParams = new URLSearchParams(window.location.hash.substr(1));
  const accessToken = hashParams.get("access_token");
  const refreshToken = hashParams.get("refresh_token");

  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);
};

export const getAccessToken = () => localStorage.getItem("access_token");
export const getRefreshToken = () => localStorage.getItem("refresh_token");

export const setTokenTimestamp = () =>
  localStorage.setItem("token_timestamp", Date.now());
export const getTokenTimestamp = () => localStorage.getItem("token_timestamp");