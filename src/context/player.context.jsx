import { createContext, useReducer } from "react";
import { useAuth } from "./auth.context";

const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_PLAYING":
          return {
            ...state,
            playing: action.payload,
          };
        case "SET_ITEM":
          return {
            ...state,
            item: action.payload,
          };
        case "SET_TOKEN":
          return {
            ...state,
            token: action.payload,
          };
        case "SET_SHUFFLE":
          return {
            ...state,
            shuffle: action.payload,
          };
        case "SET_REPEAT":
          return {
            ...state,
            repeat: action.payload,
          };
        case "SET_DISCOVER_WEEKLY":
          return {
            ...state,
            discover_weekly: action.payload,
          };
        case "SET_PLAYLISTS":
          return {
            ...state,
            playlists: action.payload,
          };
        case "SET_TOP_ARTISTS":
          return {
            ...state,
            top_artists: action.payload,
          };
        case "SET_SPOTIFY":
          return {
            ...state,
            spotify: action.payload,
          };
        case "SET_DEVICE_ID":
          return {
            ...state,
            device_id: action.payload,
          };
        default:
          return state;
      }
    },
    {
      token: null,
      item: null,
      playing: false,
      playlists: [],
      top_artists: null,
      discover_weekly: null,
      spotify: null,
      device_id: null,
      repeat: false,
      shuffle: false,
    }
  );
  const { isAuthenticated } = useAuth();
  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
      {isAuthenticated && !state.playing ? (
        <div className="drop-shadow-md fixed bottom-0 mobile:left-12 left-[13rem] right-0 bg-teal-50 p-2 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.scdn.co/image/ab67616d0000b27339fe640ab73db368eeac0f90"
              alt=""
              className="w-12 h-12 mr-3"
            />
            <div className="flex flex-col">
              <p className="font-bold">Testing Song</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-3">0:00</p>
            <div className="w-40 h-1 bg-gray-500 rounded-full relative">
              <div className="w-1/2 h-full bg-black rounded-full absolute"></div>
            </div>
            <p className="ml-3">0:30</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      ) : null}
    </PlayerContext.Provider>
  );
};

export { PlayerProvider };
