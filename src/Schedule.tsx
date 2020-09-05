import React, { memo } from 'react'
import { useSelector } from "react-redux";
import { RootState } from './index';
import './Schedule.scss';


const Schedule = () => {
    const amount = useSelector((state:RootState)=> state.amount)
    const payback = useSelector((state:RootState)=> state.payback)

    if(!amount || !payback){
        return <h1> {"Loan is empty!"} </h1>
    }

    return (<> <h1> {amount} </h1> <h1> {payback} </h1>  </>)
}

export default memo(Schedule);
