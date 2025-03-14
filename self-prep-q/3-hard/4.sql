--Explaining the difference between LEFT vs. RIGHT, INNER vs. OUTER JOIN

--inner join returns rows where it matches both tables for example on id of movies and movie_id of ratings table if there is a null value in 
-- lets say ratings.rating it doesnt return that movie
-- only matching rows from both tables are returned


SELECT movies.title, ratings.rating
FROM movies
INNER JOIN ratings ON movies.id = ratings.movie_id LIMIT 6;

-- outer join is a combination of left and right joins it returns all rows from the both tables if there is no matching rows in one of the tables
-- it uses NULL to represent the missing values
-- return includes unmatched rows from one or both tables to 

SELECT movies.title, ratings.rating
FROM movies
FULL OUTER JOIN ratings ON movies.id = ratings.movie_id;

--left join retuns all rows from left table movies and all matching rows from right table ratings if there is no match in right it adds null values
-- and still returns it with null displayed

SELECT movies.title, ratings.rating
FROM movies
LEFT JOIN ratings ON movies.id = ratings.movie_id;

--right join it returns all rows from the right table ratings and all matching rows from the left table movies if the rating has no matching movie
-- null appears in the title

SELECT movies.title, ratings.rating
FROM movies
RIGHT JOIN ratings ON movies.id = ratings.movie_id;