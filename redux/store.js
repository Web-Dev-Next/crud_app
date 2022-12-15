import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ToggleFormReducer from "./reducer";
import listnerMiddleware from "./listner";


export default configureStore({
  reducer: {
    crudapp: ToggleFormReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listnerMiddleware.middleware)
});
