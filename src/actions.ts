import { StudyMethod } from './StudyMethod';

export type Action = { type: 'METHOD'; method: StudyMethod } | { type: 'SOURCE'; source: {} };

const methodAction = (method: StudyMethod): Action => ({
  type: 'METHOD',
  method: method
});

const sourceAction = (source: any): Action => ({
  type: 'SOURCE',
  source: source
});

export const Actions = {
  methodAction,
  sourceAction
};
