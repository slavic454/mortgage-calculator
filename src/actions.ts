export const GENERATE_SCHEDULE = 'GENERATE_SCHEDULE';

export type Action = {
  type: string;
  payload: any;
};

export const generateScheduleAction = (
  amount: number,
  payback: number
): Action => ({ type: GENERATE_SCHEDULE, payload: { amount, payback } });
