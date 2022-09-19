import { counterActions } from "../Actions/countActions";

export const CounterReducer = (state: number = 0, action: any) => {
  switch (action.type) {
    case counterActions.INCREMENT:
      return state + 1;
    case counterActions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
