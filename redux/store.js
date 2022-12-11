import { configureStore } from "@reduxjs/toolkit";
import ToggleFormReducer from "./reducer";

export default configureStore({
  reducer: {
    crudapp: ToggleFormReducer,
  },
});
