//Le Bamazon

var inquirer  = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  function start (){
    connection.query('SELECT * FROM products', function (error, res) {
        if (error) throw error;
        // console.log(res);
        res.forEach(row => {
            console.log(`Id: ${row.item_id} Name: ${row.product_name} Price: ${row.price}\n` )
        });
        askQuestions()

    })
}

  var askQuestions = function() {
    inquirer.prompt([{
        name: "itemID",
        type: "input",
        message: "Please enter the ID number of the item you want to order.",
        validate: function(value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }
            return "Please enter a valid Product ID."
        }

    }, {
        name: "stockQty",
        type: "input",
        message: "How many would you like to order?",
        validate: function(value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }
            return "Please enter a valid quantity."
        }

    }]).then(function(answer) {
        connection.query('SELECT * FROM products WHERE stock_quantity = ?', [answer.stock_quantity], function(err, res) {
            console.log(res);
            if (answer.stock_quantity > res[0].stock_quantity) {
                console.log("Sorry, the selected quantity not available. Please try again later.");
                exitBamazon();

            } else {
                priceTotal = res[0].price * answer.stock_quantity;
                currentDepartment = res[0].department;
                console.log("Your order total is $" + priceTotal);
                console.log("Thank you for shopping with Bamazon.");
                
                var math = res[0].stock_quantity - parseInt(answer.stock_quantity);
                connection.query('UPDATE products SET stock_quantity= ' + math + ' WHERE item_ID =' + answer.item_ID);
                exitBamazon();
            }
        });
    });

};

var exitBamazon = function() {
    connection.end()
}