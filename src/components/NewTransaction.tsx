import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const NewTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [title, setTitle] = useState<string>("");
    const [amount, setAmount] = useState<number | string>("");

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            title,
            amount: +amount,
        };

        addTransaction(newTransaction);
        setAmount("")
        setTitle("")

    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={title}
                        required={true}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        placeholder="Enter your text"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
            (negative - expense, positive - income)
          </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => {
                            setAmount(Number(e.target.value))
                        }}
                        placeholder="Enter your amount"
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
};

export default NewTransaction;
