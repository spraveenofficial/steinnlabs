import React, { useEffect } from "react";
import { PageWrapper } from "../../components";
import { useAuth } from "../../context/auth.context";
import { loadProfile } from "../../https/auth-actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const urlParams = new URLSearchParams(window.location.search).get("code");
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  // Function to redirect to spotify login page
  const handleLoginWithSpotify = async () => {
    const client_id = "49efd61943bc4778926d0814ad65ae37";
    const redirect_uri = "http://127.0.0.1:5173/login";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=code&show_dialog=true`;
  };

  // This is basically Callback function which will be called after spotify login
  const getAccessToken = async () => {
    const client_id = "49efd61943bc4778926d0814ad65ae37";
    const client_secret = "55d792c8b786454ca0fa0461df965500";
    const redirect_uri = "http://127.0.0.1:5173/login";

    const api_uri = "https://accounts.spotify.com/api/token";
    const response = await fetch(api_uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
      },
      body: `grant_type=authorization_code&code=${urlParams}&redirect_uri=${redirect_uri}`,
    });
    const data = await response.json();
    if (data?.access_token) {
      window.localStorage.setItem("access_token", data.access_token);
      window.localStorage.setItem("refresh_token", data.refresh_token);
      loadProfile(dispatch);
      // navigate("/");
    }
    window.history.pushState({}, null, "/");
  };

  useEffect(() => {
    if (urlParams) {
      getAccessToken();
    }
  }, [urlParams]);

  return (
    <PageWrapper>
      <div className="h-screen flex justify-center items-center">
        <div className="border">
          <button
            onClick={handleLoginWithSpotify}
            className="p-4 rounded-lg font-bold bg-blue-600"
          >
            Login With Spotify
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export { Login };
