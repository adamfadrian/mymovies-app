import { FaRegHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";

import { TextLoading } from "components/Loading";
import Carousel from "components/Carousel";
import Layout from "components/Layout";
import Card from "components/shared/Card";
import { addMovieToFav } from "utils/redux/reducers/reducer";
import { useTitle } from "utils/hooks/customHooks";
import { MovieType } from "utils/types/movie";
import { header } from "utils/constant";
import SkeletonCard from "components/shared/SkeletonCard";
import { RootState } from "utils/types/redux";

const Index = () => {
  const dispatch = useDispatch();
  useTitle("CINEMAX | Now Playing");
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState('')

  // console.log('currentUser', currentUser)
  const fetchData = async (page: number) => {
    setLoading(true)
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, header)
      // console.log('res.data', res.data)
      const { results, total_pages } = res.data
      setDatas(results)
      setTotalPage(total_pages)
      setLoading(false)
    } catch (error) {

    }
  }
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value); 
  }

  useEffect(() => {
    fetchData(page);
  }, [page, search]);


  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
   
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchData(newPage);

  }

  function handleFavorite(payload: MovieType) {
    dispatch(addMovieToFav(payload))
  }

  console.log(search)
  return (
    <Layout onSearch={handleSearchChange}>
      <div>
        <p className="m-10 flex justify-center font-semibold text-xl text-zinc-900 dark:text-zinc-300 sm:text-3xl">
          Now Playing
        </p>
        <div className="grid grid-cols-3 text-center gap-4 m-4 md:grid-cols-4 lg:grid-cols-5">
          {loading ?
            (
              Array.from({ length: 5 }, (_, index) => (
                <SkeletonCard key={index + Math.random() * 100} />
              ))
            ) : (
              datas.filter((data) => {
                return search.toLocaleLowerCase() === "" ? data 
                : data.title?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
              }).map((data) => (
                <Card
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  description={data.overview}
                  image={data.poster_path}
                  release_date={moment(data.release_date).format("YYYY")}
                  labelButton={<FaRegHeart />}
                  onClickFav={() => handleFavorite(data)}
                />
              ))
            )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
