export default function averageWaitingTime(customers: number[][]): number {
  let nextCustomerStart = 0;
  let finishesAt;
  let sum = 0;

  for (let i = 0; i < customers.length; i++) {
    nextCustomerStart = Math.max(nextCustomerStart, customers[i][0]);
    finishesAt = nextCustomerStart + customers[i][1];
    sum += finishesAt - customers[i][0];
    nextCustomerStart = Math.max(nextCustomerStart, finishesAt);
  }

  return sum / customers.length;
}
