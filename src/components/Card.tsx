import { useNavigate } from "react-router-dom";
import { FC, ReactNode } from "react";

import { Button } from "./Button";

interface CardProps {
  id?: number;
  title?: string;
  image?: string;
  release_date?: string;
  labelButton?: string | ReactNode;
  onClickFav?: () => void;
}

const Card: FC<CardProps> = ({
  id,
  image,
  release_date,
  labelButton,
  onClickFav,
}) => {
  const navigate = useNavigate();
  function onClickDetail() {
    navigate(`/detail/${id}`);
  }

  return (
    <div className="mb-10 h-auto mx-auto cursor-pointer w-full xl:w-[280px] 2xl:w-[300px] shadow-md rounded-2xl">
      <figure onClick={() => onClickDetail()}>
        <button className=" dark:hover:bg-black dark:hover:text-white">
          <img
            className="rounded-2xl text-center hover:rounded-1xl duration-100 hover:scale-125 image-full"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt="Image not found."
          />
        </button>
      </figure>
      <div className="card-body gap-0  dark:hover:bg-black dark:hover:text-white">
        <span
          className="m:0 p:0 flex font-bold text-xs sm:text-base text-center"
          onClick={() => onClickDetail()}
        >
        </span>

        <p className="text-xs text-center mb-5 dark:bg-white dark:text-black font-light sm:text-base m:0 p:0">
          {release_date}
        </p>
        <div className="card-actions align-middle flex justify-center mt-5">
          <Button label={labelButton} onClick={onClickFav} />
        </div>
      </div>
    </div>
  );
};

export default Card;
