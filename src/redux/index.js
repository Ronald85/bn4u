import { configureStore } from "@reduxjs/toolkit";

import configsReducer from "./config.slice";
import jobsReducer from "./job.slice";
import profilesReducer from "./profile.slice";
import newsReducer from "./news.slice";
import { configApi } from "./config.api";
import { jobsApi } from "./jobs.api";

const store = configureStore({
  reducer: {
    configs: configsReducer,
    jobs: jobsReducer,
    profiles: profilesReducer,
    news: newsReducer,
    [configApi.reducerPath]: configApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(configApi.middleware)
});

export { store };
