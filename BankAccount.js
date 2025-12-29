import React, { useReducer, useState } from "react";
import bankReducer from "../reducer/bankReducer";
import "./BankAccount.css";

function BankAccount() {
  const [state, dispatch] = useReducer(bankReducer, { balance: 1000 });
  const [amount, setAmount] = useState("");

  const numericAmount = Number(amount);

  return (
    <div className="bank-card">
      <h2 className="bank-title">🏦 Bank Account</h2>
      <p className="bank-subtitle">
        Manage balance using <b>useReducer</b> (Deposit / Withdraw / Reset)
      </p>

      <div className="balance-box">
        <div>
          <div className="balance-label">Current Balance</div>
          <div className="balance-amount">₹{state.balance}</div>
        </div>
        <div className="balance-label">Safe & Fast</div>
      </div>

      <input
        className="amount-input"
        type="number"
        placeholder="Enter amount (e.g. 200)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="btn-row">
        <button
          className="btn btn-deposit"
          onClick={() => dispatch({ type: "DEPOSIT", amount: numericAmount })}
          disabled={!numericAmount || numericAmount <= 0}
        >
          Deposit
        </button>

        <button
          className="btn btn-withdraw"
          onClick={() => dispatch({ type: "WITHDRAW", amount: numericAmount })}
          disabled={!numericAmount || numericAmount <= 0}
        >
          Withdraw
        </button>

        <button
          className="btn btn-reset"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset Balance
        </button>
      </div>

      <div className="note">
        Tip: <b>useReducer</b> is great when you have multiple actions that update
        the same state in a structured way.
      </div>
    </div>
  );
}

export default BankAccount;
