var myGrocery = [{
        item: "Apples",
        price: 4
    },
    {
        item: "Bananas",
        price: 2
    },
    {
        item: "Bread",
        price: 3
    },
    {
        item: "Milk",
        price: 5
    }
];

var total = 0;

myGrocery.forEach(function(item) {
    console.log(item.item + ' ' + item.price);
    total += item.price;
});

console.log("The final amount is $" + total);
