import React from "react";
import Button from "../../Button";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: Props) => {
  const onDelete = (id: number) => {
    console.log("Delete ", id);
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <Button
                color="outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <td>Total</td>
        <td>{(expenses.reduce((acc, expense) => expense.amount + acc), 0)}</td>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
