const removePassword = (user) => {
    delete user.password;
};

const user = {username: "admin",password: "12345"};
removePassword(user);

console.log(user);