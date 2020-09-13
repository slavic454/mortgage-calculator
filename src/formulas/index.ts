import {
  EQUAL_PAYMENTS_STRATEGY,
  generateEqualPayments,
} from './EqualPayments';
import {
  generateSomeOtherPayments,
  SOME_OTHER_PAYMENTS_STRATEGY,
} from './SomeOtherPayments';

export const chooseStrategy = (type: string) => {
  switch (type) {
    case EQUAL_PAYMENTS_STRATEGY:
      return generateEqualPayments;
    case SOME_OTHER_PAYMENTS_STRATEGY:
      return generateSomeOtherPayments;
    default:
      return generateEqualPayments;
  }
};
