import React from 'react';
import { Repayment } from './formulas/types';
import { CardHeader, Table } from 'reactstrap';
import './ScheduleTable.scss';
import { addCurrency } from './Schedule';

export type Props = {
  schedule: Repayment[];
};

const ScheduleTable = ({ schedule }: Props) => (
  <>
    <CardHeader>
      <h1> {'Amortization schedule'} </h1>
    </CardHeader>
    <Table hover responsive bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Payment</th>
          <th>Principal</th>
          <th>Interest</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map(({ payment, principal, interest, balance }, idx) => (
          <tr key={idx}>
            <th scope="row">{idx + 1}</th>
            <td> {addCurrency(payment.toFixed(2))} </td>
            <td> {addCurrency(principal.toFixed(2))} </td>
            <td> {addCurrency(interest.toFixed(2))} </td>
            <td> {addCurrency(balance.toFixed(2))} </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
);

export default ScheduleTable;
