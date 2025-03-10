// don't edit or remove the type declaration
type TransactionType = "income" | "expense";
type Transaction = [TransactionType, number];

/**
 * You can use this array to
 * manually test your functions
 */
const transactions: Transaction[] = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// `filterIncomeTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Returns a new array containing only the income transactions.
// example:
// filterIncomeTransactions(transactions); // => [["income", 1000], ["income", 1500], ["income", 700]]
function filterIncomeTransactions(transactions: Transaction[]): Transaction[] {
  // write your code here...
  return transactions.filter((number)=> number[0] == "income"); // replace empty array with what you see is fit
}

// `filterExpenseTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Return a new array containing only the expense transactions.
// example:
// filterExpenseTransactions(transactions); // => [["expense", 500], ["expense", 300]]
function filterExpenseTransactions(transactions: Transaction[]): Transaction[] {
  // write your code here...
  return transactions.filter((number)=> number[0] == "expense"); // replace empty array with what you see is fit
}

// `calculateTotalIncome` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total income and returns it.
// example:
// calculateTotalIncome(transactions); // => 3200  (1000 + 1500 + 700)
function calculateTotalIncome(transactions: Transaction[]): number {
  // write your code here...
  return filterIncomeTransactions(transactions).reduce((total,transaction)=> total + transaction[1],0); // replace -1 with what you see is fit
}

// `calculateTotalExpenses` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total expense and returns it.
// example:
// calculateTotalExpenses(transactions); // => 800  (500 + 300)
function calculateTotalExpenses(transactions: Transaction[]): number {
  // write your code here...
  return filterExpenseTransactions(transactions).reduce((total,transaction)=> total + transaction[1],0); // replace -1 with what you see is fit
}

// `calculateNetTotal` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the net total (total income - total expenses) and returns it.
// example:
// calculateNetTotal(transactions); // => 2400  (3200 - 800)
function calculateNetTotal(transactions: Transaction[]): number {
  // write your code here...  
  return calculateTotalIncome(transactions) - calculateTotalExpenses(transactions); // replace -1 with what you see is fit
}

// `filterSignificantTransactions` function that:
// - Accepts 2 parameters:
// - a "transactions" parameter of type "Transaction[]".
// - a "threshold" parameter of type "number"
// - identifies and creates a new array with transactions (both incomes and expenses) above or equal to "threshold".
// example:
// filterSignificantTransactions(transactions, 1000); // =>  [["income", 1000], ["income", 1500]]
function filterSignificantTransactions(
  transactions: Transaction[],
  threshold: number
): Transaction[] {
  // write your code here...
  return transactions.filter((number)=> number[1] >= threshold); // replace empty array with what you see is fit
}

export {
  Transaction,
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
