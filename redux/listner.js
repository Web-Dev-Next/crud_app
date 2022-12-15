import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toggleChangeAction, updateFormAction } from "./reducer";

const listnerMiddleware = createListenerMiddleware();

listnerMiddleware.startListening({
  actionCreator: toggleChangeAction,
  effect: async (action, listnerApi) => {
    listnerApi.dispatch(updateFormAction(action.payload));
  },
});

export default listnerMiddleware;
