const product = {
    price: 1200,
    inStock: true
};

if (!product.inStock)
    console.log("Out of stock");
else if (product.price > 1000)
    console.log("Expensive");
else
    console.log("Affordable");