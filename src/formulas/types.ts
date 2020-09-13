export type Repayment = {
  payment: number;
  principal: number;
  interest: number;
  balance: number;
};

export type InputEqualPayment = {
  amount: number;
  monthlyInterestRate: number;
  paybackTimeInMonths: number;
  interestRate: number;
};

export type InputSomeOtherPayments = {
  someRate: number;
  somePayback: number;
  someAmount: number;
};

export type Output = {
  schedule: Repayment[];
  totalInterest: number;
};

export type Input = InputEqualPayment;

export type RepaymentsFunc = (x: Input) => Output;
