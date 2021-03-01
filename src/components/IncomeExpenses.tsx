import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import NumberFormat from 'react-number-format';

export const IncomeExpenses: React.FC = () => {
    const { transactions } = useContext(GlobalContext);

    const transactioAmounts = transactions.map(
        (transaction) => transaction.amount
    );
    const income = transactioAmounts
        .filter((i) => i > 0)
        .reduce((a, b) => a + b, 0);
    const expense = -transactioAmounts
        .filter((i) => i < 0)
        .reduce((a, b) => a + b, 0);

    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus"><NumberFormat value={income} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus"><NumberFormat value={expense} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                </div>
            </div>
        </div>
    );
};

export default IncomeExpenses;
