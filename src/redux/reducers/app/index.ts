// Types
import { appStateModel } from "../../../models/redux/app";
import { actionModel } from "../../../models/redux";


const initialState: appStateModel = {
  global: {
    isLoading: false,
  },
};

export const app = (state = initialState, action: actionModel) => {
  switch (action.type) {
    default:
      return state;
  }
};
