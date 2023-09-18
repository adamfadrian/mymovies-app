import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import arrayShuffle from "array-shuffle";
import moment from "moment";

import { TextLoading } from "components/Loading";
import Layout from "components/Layout";

import { MovieType, VideosType } from "utils/types/movie";
import { useTitle } from "utils/hooks/customHooks";
import { useSelector } from "react-redux";
import { RootState } from "utils/types/redux";
import axios from "axios";
import { header } from "utils/constant";
import { Button } from "components/shared/Button";

const Detail = () => {
  const { id_movie } = useParams();
  const params = useParams();
  const [videos, setVideos] = useState<VideosType[]>([]);
  const [data, setData] = useState<MovieType>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [randomVideo, setRandomVideo] = useState<string | null>(null);

  useTitle(`CINEMAX | ${data.title}`);


  const fetchMovieDetail = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id_movie}?language=en-US&append_to_response=videos`, header)
      console.log(res.data)
      setData(res.data)
       setVideos(res.data.videos?.results)
      // const videoResults = data.videos?.results;
      //   if (videoResults && videoResults.length > 0) {
      //     const randomIndex = Math.floor(Math.random() * videoResults.length);
      //     setRandomVideo=
      //   }
      setLoading(false)

    } catch (error) {

    }
  }

  // function fetchData() {
  //   fetch(
  //     https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
  //       import.meta.env.VITE_API_KEY
  //     }&language=en-US&append_to_response=videos,
  //     { method: "GET" }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //       setVideos(data.videos?.results);
  //       const videoResults = data.videos?.results;
  //       if (videoResults && videoResults.length > 0) {
  //         const randomIndex = Math.floor(Math.random() * videoResults.length);
  //         setRandomVideo(videoResults[randomIndex].key);
  //       }
  //     })
  //     .catch((error) => {
  //       alert(error.toString());
  //     })
  //     .finally(() => setLoading(false));
  // }
  
  useEffect(() => {
    fetchMovieDetail()
  }, [])

  return (
    <Layout>
      {
        loading ? (
          <div className="flex justify-center items-center w-full h-full">
            <h1>Loading .....</h1>
          </div>
        ) : (

          <div
            className="w-fit bg-cover bg-center p-10 md:p-20 lg:p-28"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0,0,0.3), rgba(0,0,0,0.3)), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            }}
          >
            <div className="p-5 flex flex-col card backdrop-blur-md bg-zinc-300/50 text-zinc-900 dark:bg-zinc-900/50 dark:text-zinc-300 lg:p-10 lg:flex-row">
              <img
                className="object-cover object-center card"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt="Image not found."
              />
              <div className=" pt-5 lg:pt-0 lg:px-10">
                <p className="font-bold sm:text-2xl">{data.title}</p>
                <p className="pb-5 border-b-2 border-b-white/10 font-extralight text-sm sm:text-lg ">
                  {data.tagline}
                </p>
                <p className="pt-5 pb-3 text-sm sm:text-lg">
                  {data.spoken_languages
                    ?.map((spoken_language) => {
                      return spoken_language.english_name;
                    })
                    .join("; ")}
                </p>
                <p className="pb-3 text-sm sm:text-lg">
                  {moment(data.release_date).format("Do MMM YYYY")}
                  {" • "}
                  {data.runtime} minutes
                </p>
                <p className="pb-5 border-b-2 border-b-white/10 text-sm sm:text-lg">
                  {data.genres
                    ?.map((genre) => {
                      return genre.name;
                    })
                    .join(" | ")}
                </p>
                <p className="text-sm pt-5 sm:text-lg">{data.overview}</p>
                <div className="card-actions flex justify-center mt-10">
                  <a href={`https://www.youtube.com/embed/${setVideos}`}>
                    <Button label="WATCH" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Layout>
  );
};

export default Detail;
