import React, { memo } from 'react'
import { useSelector } from "react-redux";
import { RootState } from './index';
import './Schedule.scss';

const MONTHS_IN_YEAR = 12
const INTEREST_RATE = 0.035;
const MONTHLY_INTEREST_RATE = 1 + INTEREST_RATE / MONTHS_IN_YEAR;

const Schedule = () => {
    const amount = useSelector((state:RootState)=> state.amount)
    const payback = useSelector((state:RootState)=> state.payback)

    if(!amount || !payback){
        return <h1> {"Loan is empty!"} </h1>
    }

    const paymentsSchedule = generateScheduleData(amount, payback * 12);
    const Schedule = paymentsSchedule.map((payment, idx) =>
        <tr key={idx}>
        <td> {payment.payment.toFixed(2)} </td>
        <td> {payment.principal.toFixed(2)}  </td>
        <td> {payment.interest.toFixed(2)}  </td>
        <td> {payment.balance.toFixed(2)}  </td>
    </tr>)
    return <table> <tr><th> payment </th> <th> principal </th> <th> interest </th> <th> balance </th> </tr> {Schedule}  </table>
}

export default memo(Schedule);

const generateScheduleData = (amount: number, payback: number) => {
    const payment = amount * Math.pow(MONTHLY_INTEREST_RATE, payback) * (MONTHLY_INTEREST_RATE - 1) / (Math.pow(MONTHLY_INTEREST_RATE, payback) - 1)
    const data = [];
    let balance = amount;
    for (let i = 0 ; i < payback ; i++){
       const interest =  balance * INTEREST_RATE / MONTHS_IN_YEAR;
       const principal = payment - interest;
       balance -= principal;
        data.push({
            payment,
            principal,
            interest,
            balance
        })
    }
    return data
}
