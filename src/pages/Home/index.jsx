import { useEffect, useState } from "react";
import { Carousel, PageWrapper } from "../../components";
import axios from "../../https/axios";
const Home = () => {

  const [state, setState] = useState({
    newReleases: [],
    featured: [],
    categories: [],
    loading: true,
    error: false,
    success: false,
  });
  
  async function myFetcher() {
    const topSong = axios
      .get("/browse/new-releases")
      .then((res) => res.data.albums.items);
    const featuredPlaylists = axios
      .get("/browse/featured-playlists")
      .then((res) => res.data.playlists.items);
    const categories = axios
      .get("/browse/categories")
      .then((res) => res.data.categories.items);
    return Promise.all([topSong, featuredPlaylists, categories]);
  }
  const fetchTopOfWeek = async () => {
    myFetcher()
      .then((data) => {
        setState({
          ...state,
          newReleases: data[0],
          featured: data[1],
          categories: data[2],
          success: true,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          error: true,
        });
      });
  };

  useEffect(() => {
    fetchTopOfWeek();
  }, []);

  return (
    <PageWrapper>
      <div className="p-3">
        {state.loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 mb-4"></div>
          </div>
        ) : state.success ? (
          <>
            <Carousel
              title="Released This Week"
              name={state.newReleases}
              type="songs"
            />
            <Carousel
              title="Featured Playlists"
              name={state.featured}
              type="songs"
            />
            <Carousel title="Browse" name={state.categories} type="category" />
          </>
        ) : (
          !state.loading &&
          state.error && (
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-2xl font-bold">Something went wrong</h1>
            </div>
          )
        )}
      </div>
    </PageWrapper>
  );
};

export { Home };
