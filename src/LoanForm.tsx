import React from 'react';
import useInput from './useInput';
import { useDispatch } from 'react-redux';
import { generateScheduleAction } from './actions';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

export const canGenerateSchedule = (
  amount: string,
  paybackTimeInYears: string
) => amount.length <= 0 || paybackTimeInYears.length <= 0;

const LoanForm = () => {
  const { bind: bindAmount, value: amountValue } = useInput('300000');
  const { bind: bindPayback, value: paybackValue } = useInput('20');
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      generateScheduleAction(
        parseInt(amountValue, 10),
        parseInt(paybackValue, 10)
      )
    );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label size="lg" htmlFor={'amount'}>
          {' '}
          {'💵 Amount '}{' '}
        </Label>
        <Input bsSize="lg" name={'amount'} {...bindAmount} type="number" />
      </FormGroup>
      <FormGroup>
        <Label size="lg" htmlFor={'payback'}>
          {' '}
          {'📅 Payment time in years'}{' '}
        </Label>
        <Input bsSize="lg" {...bindPayback} type="number" />
      </FormGroup>
      <Button
        color="primary"
        size="lg"
        block
        disabled={canGenerateSchedule(amountValue, paybackValue)}
      >
        Calculate
      </Button>
    </Form>
  );
};

export default LoanForm;
