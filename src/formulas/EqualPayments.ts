import { Repayment, RepaymentsFunc } from './types';
import { MONTHS_IN_YEAR } from '../Schedule';

export const EQUAL_PAYMENTS_STRATEGY = 'EQUAL_PAYMENTS_STRATEGY';

export type Formula = {
  monthlyInterestRate: number;
  paybackTimeInMonths: number;
  amount: number;
};

const countEqualPayment = ({
  monthlyInterestRate,
  paybackTimeInMonths,
  amount,
}: Formula) =>
  (amount *
    Math.pow(monthlyInterestRate, paybackTimeInMonths) *
    (monthlyInterestRate - 1)) /
  (Math.pow(monthlyInterestRate, paybackTimeInMonths) - 1);

export const generateEqualPayments: RepaymentsFunc = ({
  amount,
  monthlyInterestRate,
  paybackTimeInMonths,
  interestRate,
}) => {
  const payment = countEqualPayment({
    paybackTimeInMonths,
    amount,
    monthlyInterestRate,
  });
  const schedule: Repayment[] = [];
  let balance = amount;
  let totalInterest = 0;
  for (let i = 0; i < paybackTimeInMonths; i++) {
    const interest = (balance * interestRate) / MONTHS_IN_YEAR;
    const principal = payment - interest;
    balance -= principal;
    totalInterest += interest;
    schedule.push({
      payment,
      principal,
      interest,
      balance,
    });
  }
  return { schedule, totalInterest };
};
