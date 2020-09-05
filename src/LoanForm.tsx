import React from 'react'
import useInput from "./useInput";
import { useDispatch } from "react-redux";
import {generateScheduleAction} from "./actions";

export const canGenerateSchedule = (amount : string, paybackTimeInYears : string) => amount.length <= 0 || paybackTimeInYears.length <= 0

const LoanForm = () => {
    const { bind: bindAmount, value: amountValue } = useInput("")
    const { bind: bindPayback, value: paybackValue } = useInput("")
    const dispatch = useDispatch()
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault() ;
        dispatch(generateScheduleAction(amountValue, paybackValue));
    }
    return (
            <form onSubmit={handleSubmit}>
                <input {...bindAmount} type="number"/>
                <input {...bindPayback} type="number"/>
                <input type="submit" disabled={canGenerateSchedule(amountValue, paybackValue)}/>
            </form>
    )
}

export default LoanForm;
