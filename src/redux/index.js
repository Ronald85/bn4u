import { configureStore } from "@reduxjs/toolkit";

import configReducer from "./config.slice";
import jobsReducer from "./job.slice";
import profilesReducer from "./profile.slice";

const store = configureStore({
  reducer: {
    configs: configReducer,
    jobs: jobsReducer,
    profiles: profilesReducer
  }
});

export { store };
