import { Action, createReducer, on } from '@ngrx/store';
import * as ConversionActions from './conversion.actions';
import { Conversion } from './conversion.model';

const conversion: Conversion = { currentNumber: '', transformedValue : '' };
export const initialState = conversion ;


const conversionReducer = createReducer(initialState,

  on(ConversionActions.getConversions, (state) => ({...state})),
  on(ConversionActions.addConversions, (state, { payload }) =>
   ({currentNumber: payload.currentNumber, transformedValue : payload.transformedValue  }))
);

export function reducer(state: Conversion  | undefined, action: Action) {
  return conversionReducer(state, action);
}
