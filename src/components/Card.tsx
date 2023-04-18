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
  title,
  release_date,
  labelButton,
  onClickFav,
}) => {
  const navigate = useNavigate();
  function onClickDetail() {
    navigate(`/detail/${id}`);
  }

  return (
    <div className="card card-compact shadow-xl duration-300 glass bg-zinc-400 text-zinc-900 hover:bg-zinc-500 dark:bg-black dark:text-zinc-300 hover:scale-105">
      <figure onClick={() => onClickDetail()}>
        <button>
          <img
            className="duration-300 hover:scale-105 hover:blur-sm"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt="Image not found."
          />
        </button>
      </figure>
      <div className="card-body gap-0">
        <span
          className="m:0 p:0 flex font-bold text-xs sm:text-base"
          onClick={() => onClickDetail()}
        >
          <a className="hover:cursor-pointer">{title}</a>
        </span>

        <p className="text-xs font-light sm:text-base m:0 p:0">
          {release_date}
        </p>
        <div className="card-actions flex justify-center mt-5">
          <Button label={labelButton} onClick={onClickFav} />
        </div>
      </div>
    </div>
  );
};

export default Card;
