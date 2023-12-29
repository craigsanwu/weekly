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