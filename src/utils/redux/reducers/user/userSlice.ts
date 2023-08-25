import { ReducerPayload } from "./../../ReducerPayload";
import { createSlice } from "@reduxjs/toolkit";

interface User {
  fullname: string;
  email: string;
}

export interface userState {
  currentUser: User | undefined;
}

const userInitialState: userState = {
  currentUser: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser(state, { payload }: ReducerPayload<User>) {
      state.currentUser = { ...payload };
    },
    resetUser(state) {
      state.currentUser = undefined;
    },
  },
});

const userReducer = userSlice.reducer;

export const { setUser, resetUser } = userSlice.actions;

export default userReducer;
