import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SingleMovieType } from "../../types/MovieType";
import { SingleTvType } from "../../types/TvType";
import { SingleGeneralMediaDataType } from "../../types/ForSingleMedia";

export type SingleType = SingleMovieType | SingleTvType


interface SingleMediaState {
  isLoading: boolean;
  error: null | string;
  data: SingleGeneralMediaDataType;
}

const initialState: SingleMediaState = {
  isLoading: true,
  error: null,
  data: {} as SingleGeneralMediaDataType,
}

const MediaSlice = createSlice({
  name: "MediaSlice",
  initialState,
  reducers: {
    FetchSingleData(state) {
      state.isLoading = true;
      state.error = null
    },
    FetchSingleDataWithSuccess(state, action: PayloadAction<SingleGeneralMediaDataType>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    FetchSingleDataWithError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    }
  }
})

export const { FetchSingleData, FetchSingleDataWithSuccess, FetchSingleDataWithError } = MediaSlice.actions
export default MediaSlice.reducer