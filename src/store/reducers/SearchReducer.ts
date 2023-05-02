import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HomeMovieMedia, HomeTvMedia, HomePersonType } from "../../types/MediaTypes";
import { SearchType } from "../../types/MediaTypes";

interface SearchState {
  results: ResultOfSearch;
  searchField: string;
  isLoading: boolean;
  error: string | null;
}

interface ResultOfSearch {
  Movies: SearchType<HomeMovieMedia>;
  TVs: SearchType<HomeTvMedia>;
  People: SearchType<HomePersonType>;
}

const initialState: SearchState = {
  results: {} as ResultOfSearch,
  searchField: "",
  isLoading: true,
  error: null
}

interface PayloadSearchMovies {
  media: "Movies",
  results: SearchType<HomeMovieMedia>;
}
interface PayloadSearchTVs {
  media: "TVs",
  results: SearchType<HomeTvMedia>;
}
interface PayloadSearchPeople {
  media: "People",
  results: SearchType<HomePersonType>;
}

export type PayloadSearch = PayloadSearchMovies | PayloadSearchPeople | PayloadSearchTVs

const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {
    changeField(state, action: PayloadAction<string>) {
      state.searchField = action.payload;
    },
    fetchResults(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchResultsWithSuccess(state, action: PayloadAction<ResultOfSearch>) {
      state.isLoading = false;
      state.results = action.payload;
    },
    fetchResultsWithError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },
    setCurrentPage(state, action: PayloadAction<PayloadSearch>) {
      switch (action.payload.media) {
        case "Movies":
          state.results[action.payload.media] = action.payload.results
          break;
        case "People":
          state.results[action.payload.media] = action.payload.results
          break;
        case "TVs":
          state.results[action.payload.media] = action.payload.results
          break;
      }
      state.isLoading = false;
    },
  }
})

export const { setCurrentPage, changeField, fetchResults, fetchResultsWithError, fetchResultsWithSuccess } = SearchSlice.actions;
export default SearchSlice.reducer