import { useEffect, useState } from "react";
import { PageWrapper } from "../../components";
import { useAuth } from "../../context/auth.context";
import { loadProfile } from "../../https/auth-actions";

// Login Page Component

const Login = () => {
  const urlParams = new URLSearchParams(window.location.search).get("code");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();

  // Function to redirect to spotify login page
  const handleLoginWithSpotify = async () => {
    setLoading(true);
    const client_id = import.meta.env.VITE_SPOITFY_CLIENT_ID;
    const redirect_uri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
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
    setLoading(true);
    const client_id = import.meta.env.VITE_SPOITFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
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
      window.history.pushState({}, null, "/");
    }
    setLoading(false);
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
            className="p-4 rounded-lg font-bold bg-blue-600 text-white"
          >
            {loading ? "Loading..." : "Login with Spotify"}
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export { Login };
