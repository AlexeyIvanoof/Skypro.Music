import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/track"

//некое хранилище передающее в приложение срез reducer
export const store = configureStore({
    reducer: {
      tracks: tracksReducer,
    },

  });