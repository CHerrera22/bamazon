--Le Bamazon Schema

DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;
USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (50) NULL,
  department VARCHAR(50) NULL,
  price DECIMAL(5,2) NULL,
  stock_quantity INT,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("coloring book", "school supply", 5.15, 10);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("crayons", "school supply", 7.99, 8);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("protractor", "school supply", 2.75, 12);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("cat treats", "pet supply", 3.55, 25);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("chew toy", "pet supply", 7.25, 500);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("flea treatment", "pet supply", 32.99, 1);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("gummy bears", "candy", 2.50, 2);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("chocolate buttons", "candy", 4.99, 3);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("chewy caramels", "candy", 6.55, 90);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("broken lamp", "junk", .45, 5);