import { useSelector, useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import moment from "moment";

import Layout from "components/Layout";
// import { setFavorites } from "utils/redux/reducers/reducer";
import { useTitle } from "utils/hooks/customHooks";
import { MovieType } from "utils/types/movie";
import { RootState } from "utils/types/redux";
import { removeFavList } from "utils/redux/reducers/reducer";
import Card from "components/shared/Card";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
}

const Favorite = () => {
  const dispatch = useDispatch();
  useTitle("CINEMAX | Favorites");
  // const datas = useSelector((state: RootState) => state.data.favorites);
  // const [datas, setDatas] = useState<MovieType[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const movieDetails = useSelector((state: RootState) => state.favorite.favorites)
  // useEffect(() => {
  //   fetchData();
  // }, [removeFavorite]);

  // function fetchData() {
  //   const getFavorite = localStorage.getItem("FavMovie");
  //   if (getFavorite) {
  //     setDatas(JSON.parse(getFavorite));
  //   }
  //   setLoading(false);
  // }

  function removeFavorite(data: MovieType) {
    dispatch(removeFavList(data))
  }

  return (
    <Layout>
      {/* {loading ? (
        <div className="flex justify-center items-center w-full">
          <TextLoading />
        </div>
      ) : ( */}
      {/* <div> */}
      <p className="m-10 flex justify-center font-semibold text-xl text-zinc-900 dark:text-zinc-300 sm:text-3xl">
        Favorites
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 m-4">
        {movieDetails.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.overview}
            image={data.poster_path}
            release_date={moment(data.release_date).format("YYYY")}
            labelButton={<FaRegTrashAlt />}
            onClickFav={() => removeFavorite(data)}
          />
        ))}
      </div>
      {/* </div> */}
      {/* )} */}
    </Layout>
  );
};

export default Favorite;
