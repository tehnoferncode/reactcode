function bankReducer(state, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.amount };

    case "WITHDRAW":
      return { balance: state.balance - action.amount };

    case "RESET":
      return { balance: 0 };

    default:
      return state;
  }
}

export default bankReducer;
