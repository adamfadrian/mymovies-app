import { Skeleton } from 'antd'
import React from 'react'

export default function SkeletonCard() {
    return (
            <div className="mb-10 h-auto mx-auto cursor-pointer w-full xl:w-[280px] 2xl:w-[300px] shadow-md rounded-2xl">
                <figure>
                    <button className=" dark:hover:bg-black dark:hover:text-white">
                        <Skeleton.Image
                            active
                            className="rounded-2xl text-center hover:rounded-1xl duration-100 hover:scale-125 h-full w-full"
                        />
                        {/* <img
                            className="rounded-2xl text-center hover:rounded-1xl duration-100 hover:scale-125 image-full"
                            src={`https://image.tmdb.org/t/p/w500${image}`}
                            alt="Image not found."
                        /> */}
                    </button>
                </figure>
                <div className="card-body gap-0  dark:hover:bg-black dark:hover:text-white">
                    <h1
                        style={{ height: '3rem', lineHeight: '1.5rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}
                        className="text-2xl font-bold mb-4"
                    >
                    </h1>
                    <p
                        style={{ height: '9rem', lineHeight: '1.5rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '6', WebkitBoxOrient: 'vertical' }}
                    >
                    </p>
                    <span
                        className="m:0 p:0 flex font-bold text-xs sm:text-base text-center"

                    >
                    </span>

                    <p className="text-xs text-center mb-5 dark:bg-white dark:text-black font-light sm:text-base m:0 p:0 mt-5">

                    </p>
                    <div className="card-actions align-middle flex justify-center mt-5">
                        {/* <Button label={labelButton} onClick={onClickFav} /> */}
                        <Skeleton.Button
                            active
                            style={{ height: '3rem', width: '100%', marginBottom: '0.5rem' }}
                        />
                    </div>
                </div>
            </div>
    )
}
