import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {
    toggleForm: false,
    formId: undefined,
    deleteId: null,
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
    deleteAction: (state, action) => {
      state.client.deleteId = action.payload;
    },
  },
});

export const { toggleChangeAction, updateFormAction, deleteAction } =
  ToggleFormReducer.actions;

export default ToggleFormReducer.reducer;
