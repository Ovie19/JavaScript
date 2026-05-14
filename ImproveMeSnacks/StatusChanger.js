const order = {id: 1,status: "pending"};

const changeStatus = (order) => {
    order.status = "delivered";
};

changeStatus(order);

console.log(order);
