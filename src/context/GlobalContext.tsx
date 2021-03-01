import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { TransactionType } from "../Types";

const startingState = {
    transactions: [{ id: 1, title: "defaoult amount", amount: 100 }],
    deleteTransaction: (id: number) => { },
    addTransaction: (transaction: TransactionType) => { },
};

export const GlobalContext = createContext(startingState);

export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, startingState);

    // Actions (will be sent to reducer)
    function deleteTransaction(id: number) {
        dispatch({
            type: "DELETE",
            id,
        });
    }

    function addTransaction(transaction: TransactionType) {
        dispatch({
            type: "ADD",
            transaction,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
