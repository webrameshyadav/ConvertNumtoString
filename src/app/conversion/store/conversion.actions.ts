import { createAction, props } from '@ngrx/store';
import { Conversion } from './conversion.model';


export const addConversions = createAction('[conversion Component] AddConversions',
props<{ payload: Conversion }>());
export const getConversions = createAction('[conversion Component] getConversions');
