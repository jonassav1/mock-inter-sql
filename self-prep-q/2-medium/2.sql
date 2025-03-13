--Aggregate functions (SUM, AVG, COUNT, MAX, MIN)

-- Count how many movies with word "matrix"  in title there is

SELECT COUNT(id) FROM movies WHERE title LIKE "%matrix%";


-- find oldest movie in the database
SELECT title, year 
FROM movies 
WHERE year = (SELECT MIN(year) FROM movies) LIMIT 1;

-- find newest movie in the database
SELECT title, year 
FROM movies 
WHERE year = (SELECT MAX(year) FROM movies) LIMIT 1;