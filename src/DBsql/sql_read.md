# SQL Read

## Overview

#### SELECT

https://www.w3schools.com/sql/sql_select.asp

Specify the Colums to be shown

```sql
SELECT * FROM products 
```

```sql
SELECT name, price FROM products 
```

#### WHERE

https://www.w3schools.com/sql/sql_where.asp

Specify the rows to be shown

```sql
SELECT * FROM products WHERE id=1	
```

## Operators in The WHERE Clause

The following operators can be used in the WHERE clause:

| Operator | Description                                                  | Example                                                      |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| =        | Equal                                                        | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_equal_to) |
| >        | Greater than                                                 | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_greater_than) |
| <        | Less than                                                    | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_less_than) |
| >=       | Greater than or equal                                        | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_greater_than2) |
| <=       | Less than or equal                                           | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_less_than2) |
| <>       | Not equal. **Note:** In some versions of SQL this operator may be written as != | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_not_equal_to) |
| BETWEEN  | Between a certain range                                      | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_between) |
| LIKE     | Search for a pattern                                         | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_like) |
| IN       | To specify multiple possible values for a column             | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_in) |

------

### 

## `SELECT`

to retrieve Data

```sql
SELECT name, age FROM people;
```

Semicolon at the End!

```sql
SELECT name, age 
FROM people;
```

```sql
SELECT * FROM people;
# all
```

```sql
SELECT * 
FROM people
WHERE role = "Teacher";
```

```sql
SELECT * 
FROM people
WHERE id = 2;
```

------

`BETWEEN`:  is inclusive

`%` - Wildcard

`_` - Wildcard

`LIMIT` is called  `TOP` in other engines

`LIKE` instead of `===`

### Show All Rows of a Table

```
SELECT * FROM Customers;
```

```
+----+--------+-----+-----------------------------------+----------+
| id | name   | age | address                           | salary   |
+----+--------+-----+-----------------------------------+----------+
|  1 | Teresa |  33 | Borselstr. 7, 22765 Hamburg       | 30000.00 |
|  2 | John   |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
|  3 | Max    |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
+----+--------+-----+-----------------------------------+----------+
```

------

### Show a Certain Column

```
SELECT name FROM Customers;
```

```
+--------+
| name   |
+--------+
| Teresa |
| John   |
| Max    |
+--------+
3 rows in set (0.003 sec)
```

------

## Queries: Show Specific Rows

##### `WHERE`

filter - always before eg `GROUP`

##### `HAVING`

like `WHERE`, but after `GROUP`

------

Queries are the most important feature of the SQL language. You use it to show only specific rows that match a certain search criteria – the query.

```
SELECT * FROM Customers WHERE salary > 40000;
```

```
+----+------+-----+-----------------------------------+----------+
| id | name | age | address                           | salary   |
+----+------+-----+-----------------------------------+----------+
|  2 | John |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
|  3 | Max  |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
+----+------+-----+-----------------------------------+----------+
2 rows in set (0.012 sec)
```

This follows a certain pattern:

```
SELECT <columns> 	# what to show in the result
FROM <table>			# the table to search
WHERE <query>;		# what we search for
```

Some more examples. You can test them out on the website:

https://www.sachsen.schule/~terra2014/ergebnis.php

```
SELECT * FROM BERG
WHERE B_NAME = "Chimborazo"

SELECT * FROM BERG
WHERE HOEHE >= 7001

SELECT * FROM BERG
WHERE HOEHE >= 7000 AND HOEHE <= 8000

SELECT * FROM BERG
WHERE HOEHE BETWEEN 7000 AND 8000
```

------

## Sorting the Results

##### `ORDER BY` 

always at the End (default: ASCending)

Multiple Conditions:

```sql
ORDER BY city, name;
```

```sql
ORDER BY city ASC, name DESC;ORDER BY city, name;
```

------

```
SELECT * FROM Customers WHERE salary > 40000 ORDER BY salary;
```

```
+----+------+-----+-----------------------------------+----------+
| id | name | age | address                           | salary   |
+----+------+-----+-----------------------------------+----------+
|  2 | John |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
|  3 | Max  |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
+----+------+-----+-----------------------------------+----------+
```

In ascending order: `ASC`

```
SELECT * FROM Customers WHERE salary > 40000 ORDER BY salary ASC;
```

```
+----+------+-----+-----------------------------------+----------+
| id | name | age | address                           | salary   |
+----+------+-----+-----------------------------------+----------+
|  2 | John |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
|  3 | Max  |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
+----+------+-----+-----------------------------------+----------+
```

In descending order: `DESC`

```
SELECT * FROM Customers WHERE salary > 40000 ORDER BY salary DESC;
```

```
+----+------+-----+-----------------------------------+----------+
| id | name | age | address                           | salary   |
+----+------+-----+-----------------------------------+----------+
|  3 | Max  |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
|  2 | John |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
+----+------+-----+-----------------------------------+----------+
```

------

`GROUP BY`

