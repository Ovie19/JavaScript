const checkBalance = (account) => {
    return account.balance < 1000 ? "Low Balance" : "Sufficient Balance";
};

const account = {accountName: "David", balance: 500};

const message = checkBalance(account);
console.log(message);