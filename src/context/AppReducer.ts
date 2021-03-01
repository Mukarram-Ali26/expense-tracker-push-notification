import { TransactionType } from "../Types";

type Actions = 
| {type: "ADD", transaction: TransactionType}
| {type: "DELETE", id: number}

 const reducer=(state: { transactions: TransactionType[]; }, action: Actions ) => {
    switch(action.type) {
        case 'DELETE':
            return {
                transactions: state.transactions.filter(t => t.id !== action.id)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [action.transaction, ...state.transactions]
            }
        default:
            return state;
    }
}
export default reducer