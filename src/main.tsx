import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import axios from "axios";

import store, { persistor } from "./utils/redux/store/store";
import App from "./routes";
import "./styles/index.css";
import { PersistGate } from "redux-persist/integration/react";
import { StrictMode } from "react";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
