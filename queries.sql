-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT Product.ProductName as Product, Category.CategoryName as Category
FROM Product JOIN Category
ON Product.CategoryId = Category.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id as OrderId, s.CompanyName as Shipper
FROM "Shipper" as s
JOIN "Order" as o
ON o.ShipVia = s.id
WHERE DATE(OrderDate) < DATE('2012-08-09')

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName as Product, p.UnitsInStock as Quantity
FROM "order" as o
JOIN OrderDetail as od
JOIN Product as p
ON od.OrderId = o.id AND od.ProductId = p.id
WHERE o.id = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.id as OrderID, o.ShipName as Company, e.LastName as Employee
FROM "Order" as o
JOIN Employee as e
ON o.EmployeeId = e.id
