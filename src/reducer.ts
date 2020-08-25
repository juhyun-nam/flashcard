import { Reducer } from 'redux';
import { Action } from './actions';
import { StudyMethod } from './StudyMethod';

export type AppState = {
  method: StudyMethod;
  source: any;
};

const reducer: Reducer<AppState | undefined> = (state, action): AppState | undefined => {
  switch (action.type) {
    case 'METHOD':
      return { ...state, method: action.method } as AppState;
    case 'SOURCE':
      return { ...state, source: action.source } as AppState;
    default:
      return state;
  }
}
export default reducer;
