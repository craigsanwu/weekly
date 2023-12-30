SELECT
  activity_date AS day,
  COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE activity_date BETWEEN '2019-06-28' AND  '2019-07-27'
GROUP BY 1;

-- question 1070 

WITH
  ProductToYear AS (
    SELECT product_id, MIN(year) AS year
    FROM Sales
    GROUP BY 1
  )
SELECT
  Sales.product_id,
  ProductToYear.year AS first_year,
  Sales.quantity,
  Sales.price
FROM Sales
INNER JOIN ProductToYear
  USING (product_id, year);



--    596 solution code

SELECT class
FROM Courses
GROUP BY 1
HAVING COUNT(*) >= 5;


-- 1729 sol


SELECT
  user_id,
  COUNT(follower_id) AS followers_count
FROM Followers
GROUP BY 1
ORDER BY 1;



-- 619 

WITH
  UniqueNumbers AS (
    SELECT num
    FROM MyNumbers
    GROUP BY 1
    HAVING COUNT(num) = 1
  )
SELECT MAX(num) AS num
FROM UniqueNumbers;


-- 1045 sol

SELECT customer_id
FROM Customer
GROUP BY 1
HAVING COUNT(DISTINCT product_key) = (
    SELECT COUNT(*) FROM Product
  );