import { FaRegHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import axios from "axios";

import { TextLoading } from "components/Loading";
import Carousel from "components/Carousel";
import Layout from "components/Layout";
import Card from "components/Card";

import { setFavorites } from "utils/redux/reducers/reducer";
import { useTitle } from "utils/hooks/customHooks";
import { MovieType } from "utils/types/movie";

const Index = () => {
  const dispatch = useDispatch();
  useTitle("Movix | Now Playing");
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  //   this.state = {
  //       datas: [],
  //       loading: true,
  //       page: 1,
  //       totalPage: 1,
  //  };

  useEffect(() => {
    fetchData(1);
  }, []);
  // componentDidMount() {
  //   this.fetchData(1);
  // }

  function fetchData(page: number) {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((data) => {
        const { results, total_pages } = data.data;
        setDatas(results);
        setTotalPage(total_pages);
        // this.setState({ datas: results, totalPage: total_pages });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
    // .finally(() => this.setState({ loading: false }));
  }

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
    // const newPage = this.state.page + 1;
    // this.setState({ page: newPage }, () => console.log(this.state.page));
    // this.fetchData(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchData(newPage);
    // const newPage = this.state.page - 1;
    // this.setState({ page: newPage });
    // this.fetchData(newPage);
  }

  function handleFavorite(data: MovieType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      let parseFav: MovieType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
      dispatch(setFavorites(parseFav));
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Favorited");
    }
  }

  return (
    <Layout>
      {!loading && (
        <Carousel
          datas={datas.slice(0, 5)}
          content={(data) => (
            <div
              className="w-full h-full flex justify-center items-center bg-contain bg-no-repeat bg-center sm:bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0,0,0.3), rgba(0,0,0,0.3)), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
              }}
            >
              <p className="text-white tracking-widest font-bold break-words lg:text-2xl">
                {data.title}
              </p>
            </div>
          )}
        />
      )}
      {loading ? (
        <div className="flex justify-center items-center w-full">
          <TextLoading />
        </div>
      ) : (
        <div>
          <p className="m-10 flex justify-center font-semibold text-xl text-zinc-900 dark:text-zinc-300 sm:text-3xl">
            Now Playing
          </p>
          <div className="grid grid-cols-3 gap-4 m-4 md:grid-cols-4 lg:grid-cols-5">
            {datas.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                title={data.title}
                image={data.poster_path}
                release_date={moment(data.release_date).format("YYYY")}
                labelButton={<FaRegHeart />}
                onClickFav={() => handleFavorite(data)}
              />
            ))}
          </div>
          <div className="btn-group flex justify-center m-10">
            <button
              className="px-2 btn border-transparent w-fit text-[0.75rem] bg-zinc-300 text-zinc-900 hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base disabled:dark:text-zinc-800"
              onClick={() => prevPage()}
              disabled={page === 1}
            >
              <FaChevronLeft />
            </button>
            <button className="px-3 border-transparent w-fit text-[0.75rem] bg-zinc-300 text-zinc-900 hover:cursor-default hover:border-transparent dark:bg-zinc-900 dark:text-zinc-300 md:text-base">
              {page}
            </button>
            <button
              className="px-2 btn border-transparent w-fit text-[0.75rem] bg-zinc-300 text-zinc-900 hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base disabled:dark:text-zinc-800"
              onClick={() => nextPage()}
              disabled={page === totalPage}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Index;
