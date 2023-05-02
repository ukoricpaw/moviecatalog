import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HomeMovieMedia, HomeTvMedia, HomePersonType } from "../../types/MediaTypes"


export type HomeDataType = {
  tredingFilms: HomeMovieMedia[],
  nowPlayingFilms: HomeMovieMedia[],
  topRatedFilms: HomeMovieMedia[],
  popularFilms: HomeMovieMedia[],
  popularPeople: HomePersonType[],
  topRatedTV: HomeTvMedia[]
}

interface HomeState {
  data: HomeDataType,
  loading: boolean,
  error: null | string
}

const initialState: HomeState = {
  data: {} as HomeDataType,
  loading: true,
  error: null
}

const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState,
  reducers: {
    FetchData(state) {
      state.loading = true;
      state.error = null;
    },
    FetchDataWithSuccess(state, action: PayloadAction<HomeDataType>) {
      state.loading = false;
      state.data = action.payload;
    },
    FetchDataWithError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
})

export const { FetchData, FetchDataWithSuccess, FetchDataWithError } = HomeSlice.actions

export default HomeSlice.reducer;