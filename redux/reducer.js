import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {
    toggleForm: false,
    formId: undefined,
  },
};

export const ToggleFormReducer = createSlice({
  name: "crudapp",
  initialState,
  reducers: {
    toggleChangeAction: (state, action) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
    updateFormAction: (state, action) => {
      state.client.formId = action.payload;
    },
  },
});

export const { toggleChangeAction, updateFormAction } = ToggleFormReducer.actions;

export default ToggleFormReducer.reducer;
