import React from "react";
import { useEffect } from "react";
import { Carousel, PageWrapper, SongCard } from "../../components";
import axios from "../../https/axios";
const Home = () => {
  // List of data we need to fetch at once Released This Week, Featured Playlists, Browse Genre
  const [newReleases, setNewReleases] = React.useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  // console.log(newReleases);
  const fetchTopOfWeek = async () => {
    const response = await axios.get("/browse/new-releases");
    console.log(response.data);
    setNewReleases(response.data.albums.items);
  };

  useEffect(() => {
    fetchTopOfWeek();
  }, []);

  return (
    <PageWrapper>
      <div className="p-3">
        <Carousel title="Top of the week" name={newReleases} />
        <Carousel title="Top of the week" name={newReleases} />
      </div>
    </PageWrapper>
  );
};

export { Home };
