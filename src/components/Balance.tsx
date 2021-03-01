import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import NumberFormat from 'react-number-format';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const transactioAmounts = transactions.map(
        (transaction) => transaction.amount
    );
    const balance = transactioAmounts.reduce((a, b) => a + b, 0);

    return (
        <>
            <h4>Your Balance</h4>
            <h1><NumberFormat value={balance} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </h1>
        </>
    );
};

export default Balance;
