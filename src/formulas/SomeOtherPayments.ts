import { RepaymentsFunc } from "./types";

export const SOME_OTHER_PAYMENTS_STRATEGY = "SOME_OTHER_PAYMENTS_STRATEGY";

export const generateSomeOtherPayments: RepaymentsFunc = ({ amount, monthlyInterestRate, paybackTimeInMonths, interestRate }) => ({schedule: [], totalInterest: 0})
