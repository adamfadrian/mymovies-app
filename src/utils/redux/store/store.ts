import { configureStore } from "@reduxjs/toolkit";

import reducer from "utils/redux/reducers/reducer";

const store = configureStore({
  reducer: {
    data: reducer.state,
  },
});

export default store;
