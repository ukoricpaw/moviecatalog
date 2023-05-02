import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PersonState } from "../../types/ForPerson";
import { PersonDataState } from "../../types/ForPerson";

const initialState: PersonState = {
  data: {} as PersonDataState,
  isLoading: true,
  error: null
}

const PersonSlice = createSlice({
  name: "PersonSlice",
  initialState,
  reducers: {
    fetchPersonData(state) {
      state.isLoading = true;
    },
    fetchPersonDataWithSuccess(state, action: PayloadAction<PersonDataState>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchPersonDataWithError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export const { fetchPersonData, fetchPersonDataWithError, fetchPersonDataWithSuccess } = PersonSlice.actions;
export default PersonSlice.reducer