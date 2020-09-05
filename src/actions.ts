export const GENERATE_SCHEDULE = "GENERATE_SCHEDULE";

export type Action = {
    type: string;
    payload: any; //FIXME
}

export const generateScheduleAction = (amount: string, payback: string) : Action =>
    ({type: GENERATE_SCHEDULE, payload: {amount, payback} })
