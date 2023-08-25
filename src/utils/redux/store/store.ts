import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import movieReducer from "utils/redux/reducers/reducer";
import storage from "redux-persist/lib/storage";
import userReducer from "../reducers/user/userSlice";

const persistConfig = {
  key: "root",
  storage,
};
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const rootReducer = combineReducers({
  favorite: persistReducer(persistConfig, movieReducer),
  user: persistReducer(persistConfig, userReducer)
})

const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware,
});


const persistor = persistStore(store)

export {persistor, store}

export default store;
