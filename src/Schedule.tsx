import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './index';
import Ad from './assets/mortgage-ad.jpg';
import Summary from './Summary';
import { EQUAL_PAYMENTS_STRATEGY } from './formulas/EqualPayments';
import { chooseStrategy } from './formulas';
import ScheduleTable from './ScheduleTable';
import { Card, CardImg } from 'reactstrap';

const INTEREST_RATE = 0.035;

export const MONTHS_IN_YEAR = 12;

export const addCurrency = (money: string) => money + '$';

const Schedule = () => {
  const { amount, payback } = useSelector(({ amount, payback }: RootState) => ({
    amount,
    payback,
  }));
  const paybackTimeInMonths = payback * MONTHS_IN_YEAR;

  const monthlyInterestRate = 1 + INTEREST_RATE / MONTHS_IN_YEAR;

  if (!amount || !payback) {
    return (
      <Card>
        <CardImg src={Ad} />
      </Card>
    );
  }

  const { schedule, totalInterest } = chooseStrategy(EQUAL_PAYMENTS_STRATEGY)({
    amount,
    paybackTimeInMonths,
    interestRate: INTEREST_RATE,
    monthlyInterestRate,
  });

  return (
    <>
      <Summary
        amount={amount}
        totalInterests={totalInterest}
        rate={INTEREST_RATE}
      />
      <ScheduleTable schedule={schedule} />
    </>
  );
};

export default memo(Schedule);
