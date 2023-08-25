import { createSlice } from "@reduxjs/toolkit";

import { MovieType } from "utils/types/movie";
import { ReducerPayload } from "../ReducerPayload";

interface StateType {
  favorites: MovieType[];
}

const initialState: StateType = {
  favorites: [],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    addMovieToFav: (state, { payload }: ReducerPayload<MovieType>) => {
      const isMovieInFavorite = state.favorites.some((i) => i.id === payload.id);
      if (!isMovieInFavorite) {
        state.favorites.push({ ...payload });
        console.log("payload", payload);
      } else {
        alert("Movie already in favorites");
      }
    },
    removeFavList: (state, { payload }: ReducerPayload<MovieType | any>) => {
      state.favorites = state.favorites.filter((item) => {
        return item.id !== payload.id;
      });
      console.log("delete", payload);
    },
  },
});

const movieReducer= sliceState.reducer

export const { addMovieToFav, removeFavList } = sliceState.actions;
export default movieReducer;
