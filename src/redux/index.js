import { configureStore } from "@reduxjs/toolkit";

import configsReducer from "./config.slice";
import jobsReducer from "./job.slice";
import profilesReducer from "./profile.slice";
import newsReducer from "./news.slice";

const store = configureStore({
  reducer: {
    configs: configsReducer,
    jobs: jobsReducer,
    profiles: profilesReducer,
    news: newsReducer
  },
  devTools: true
});

export { store };
